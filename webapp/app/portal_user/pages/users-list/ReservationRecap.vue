<template>
    <div class="text-center">
        <div class="text-xxs mb-xxs">
            <div>{{$t('reservation made' , {count:user.reservationCount}, user.reservationCount )}}</div>
            <div class="text-bold" v-if="user.reservationCount>0">{{$t('last booking made')}} {{user.lastBookingDate}} </div>
        </div>
        <div>
            <button @click="goToUser" class="btn btn-primary btn-xs text-xxs wd-wide p-xs">
                {{ $t('user profile')}}  <span aria-hidden="true" class="text-bold">&rsaquo;</span>
            </button>
        </div>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'

    export default{
        name:'ReservationRecap',
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
</script>
<style lang="scss">
</style>
