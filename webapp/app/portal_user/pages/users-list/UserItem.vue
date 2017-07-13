<template>
    <div class="user-item">
        <div v-if="false" class="debug-el"></div>

        <div class="row" >
            <div class="mb user-avatar-container" :class="avatarCol">
               <user-avatar :user="user" />
            </div>
            <div class="mb-sm user-cash-back-container"  :class="cashBackCol">
                <user-cash-back :user="user" :container-size="containerSize" />
            </div>
            <div class="reservation-recap-container" :class="reservationCol">
                <reservation-recap :user="user" />
            </div>
        </div>

    </div>
</template>

<script>
    import allFilters from '../../../../../assets/filters'
    import UserCashBack from './UserCashBack'
    import {mapState,mapActions} from 'vuex'
    import _debounce from 'lodash/debounce'
    import AutoResizableBasicComponent from '../../../../../assets/components/AutoResizableBasicComponent'

    export default {
        extends:AutoResizableBasicComponent,
        components:{
            UserAvatar:{
                template:`
                            <div class="user-avatar">
                                <div class="pull-left mr">
                                   <img :src="user.image_path||'//reservation.cmsone.it/common/images/sb/settimana-bianca-avatar.jpg'" alt="Image" class="media-box-object img-circle thumb48">
                                </div>
                                <div class="avatar-data">
                                    <div class="text-bold text-sm">{{user.surname}} {{user.fullname}}</div>
                                    <div class="ucase text-xxs mb-sm ">{{$t( 'user code' )}} <span class="text-orange">{{user.code}}</span></div>
                                    <div class="text-xxs">{{$t( 'user since' )}} {{user.userSince }}</div>
                                </div>
                            </div>
                        `,
                filters:{
                    ...allFilters
                },
                props:['user']
            },
            UserCashBack,
            ReservationRecap:{
                template:`<div class="text-center">
                            <div class="text-xxs mb-xxs">
                                <div>{{$t('reservation made' , {count:user.reservationCount}, user.reservationCount )}}</div>
                                <div class="text-bold" v-if="user.reservationCount>0">{{$t('last booking made')}} {{user.lastBookingDate}} </div>
                            </div>
                            <div>
                                 <button @click="goToUser" class="btn btn-primary btn-xs text-xxs wd-wide p-xs">
                                     {{ $t('user profile')}}  <span aria-hidden="true" class="text-bold">&rsaquo;</span>
                                 </button>
                            </div>
                        </div>`,
                filters:{
                    ...allFilters
                },
                methods:{
                    ...mapActions('guest',['selectCurrentGuest']),
                    goToUser(){
                        this.selectCurrentGuest(this.user)
                            .then(res=>{
                                this.$router.push({name:'be-guest'})
                            });
                    }
                },
                props:['user'],
            }
        },
        data(){
            return {
                avatarCol:'col-xs-3',
                cashBackCol:'col-xs-6',
                reservationCol:'col-xs-3'
            }
        },
        methods:{
            setCols(avatarCol,cashBackCol,reservationCol){
                let borders = '';

                if(cashBackCol==6) borders = ' bl br ';
                else if(cashBackCol<12) borders = ' bl '
                this.avatarCol = 'col-xs-'+avatarCol;
                this.cashBackCol = 'col-xs-'+cashBackCol + borders;
                this.reservationCol = 'col-xs-'+reservationCol;
            },
            resize( ){
                let size = this.getSize();
                //console.log("UserItem",size.width);
                if(size.width>721) this.setCols(3,6,3);
                else if(size.width>576) this.setCols(4,8,12);
                else if(size.width>557) this.setCols(5,7,12);
                else if(size.width>444) this.setCols(6,6,12);
                else this.setCols(12,12,12);
            }
        },
        computed:{
            ...mapState(['debugMode'])
        },
        props:{
            user:Object
        }
    }

</script>
<style lang="scss">
    @import "../../../../../assets/scss/app/variables";
    @import "../../../../../assets/scss/app/media-queries";
    @import "../../../../../assets/scss/bootstrap/bootstrap/mixins/grid";
    @import "../../../../../assets/scss/bootstrap/bootstrap/mixins/clearfix";
    @import "../../../../../assets/scss/breakpoint";

</style>