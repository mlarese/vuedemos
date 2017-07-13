<template>
    <div class="be-user-list user-list user-list-page" >

        <div class="row">
            <div v-if="false"> <user-widget-bar :container-size="size" />  </div>
        </div>

        <div class="row">
            <div> <user-search-filter-bar :container-size="size"/>  </div>
        </div>

        <div class="align-left mb">
            <pagination class="pull-right"
                for="portal_user"
                :records="records"
                :per-page="perPage"
                :chunk="chunk"
            ></pagination>

            <span v-if="!hasError" class="text-bold text-sm">{{ $t('found users',{count: records  },records) }}:</span>
        </div>

        <div v-for="(user,index) in userList">
            <div class="panel b user-panel align-left bt2">
                <div class="panel-body"> <user-item  :user="user" :container-size="size"></user-item>  </div>

                <div class="panel-footer user-item-panel-footer"
                     v-if=" user.cashback.earned>0 || user.fidelity.earned>0 ">

                    <resize-sensor @resize="onResize" ></resize-sensor>

                    <div class="row user-rep-button-group" >
                        <div :class="colUserRepButton.text" class="user-rep-button-container this-user-label-container text-center">
                            <span class="this-user-label">{{$t('for this user')}}</span>
                        </div>
                        <div :class="colUserRepButton.widget" class="user-rep-button-container" v-if="user.cashback.earned>0">
                            <user-rep-button  label="you have request cashback" :value="user.cashback.earned"    type="cashback" :container-size="size"></user-rep-button>
                        </div>
                        <div :class="colUserRepButton.widget" class="user-rep-button-container" v-if="user.fidelity.earned>0">
                            <user-rep-button  label="you have request to send" :value="user.fidelity.earned"    type="gifts" :container-size="size"></user-rep-button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <pagination class="text-right"
            for="portal_user"
            :records="records"
            :per-page="perPage"
            :chunk="chunk"
        ></pagination>


        <div v-if="hasError" class="alert alert-danger">{{$t("Errore di collegamento con il server")}}</div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapState,mapActions,mapGetters} from 'vuex'
    import {VuePagination} from 'vue-pagination-2';
    import allFilters from '../../../../../assets/filters'
    import UserItem from './UserItem'
    import UserRepButton from './UserRepButton'
    import UserWidgetBar from './UserWidgetBar'
    import UserSearchFilterBar from './UserSearchFilterBar'
    import ResizeSensor from 'vue-resize-sensor';
    import _debounce from 'lodash/debounce'

    let store = Vue.$ioc.resolve("store");

    export default {
        beforeRouteEnter (to, from, next) {
            const goOn = res=> next();

            store.commit('SET_MULTI_LOADING',true,{root:1});

            store.dispatch('portal_user/loadUsers',null,{root:1})
                .then(goOn)
                .catch(goOn)
                .then(()=>{ store.commit('SET_MULTI_LOADING',false,{root:1});  }) ;
        },
        filters:{...allFilters},
        watch:{
            search(){
                this.$store.commit("portal_user/SET_PAGE",1,{root:true});
                this.loadUsers();
            },
            page(){
                this.loadUsers();
            },
            order(){
                this.$store.commit("portal_user/SET_PAGE",1,{root:true});
                this.loadUsers();
            }
        },
        data(){
            return {
                colUserRepButton:{widget:'col-xs-5', text:'col-xs-2'},
                size:{width:0,height:0}
            }
        },
        methods:{
            ...mapActions('portal_user',['loadUsers']),
            resize(size){
                this.size=size;
                if(size.width>1500) this.colUserRepButton={widget:'col-xs-2', text:'col-xs-1'};
                else if(size.width>1200) this.colUserRepButton={widget:'col-xs-3', text:'col-xs-2'};
                else if(size.width>764) this.colUserRepButton={widget:'col-xs-5', text:'col-xs-2'};
                else if(size.width>596) this.colUserRepButton={widget:'col-xs-4', text:'col-xs-4'};
                else if(size.width>460) this.colUserRepButton={widget:'col-xs-6', text:'col-xs-12'};
                else this.colUserRepButton={widget:'col-xs-12', text:'col-xs-12'};
            }
        },
        computed:{
            ...mapGetters(['hasError']),
            ...mapState('portal_user',['order','search','userList', 'page', 'records', 'perPage' ,'chunk'])

        },
        created(){
            this.onResize = _debounce(this.resize, 100);
        },
        components:{ UserItem, UserRepButton,ResizeSensor ,UserWidgetBar,UserSearchFilterBar}
    }

</script>

<style lang="scss">
    @import "../../../../../assets/scss/app/variables";
    @import "./vars";

    .user-item-panel-footer{
        min-height:$user-item-panel-footer-height;
        background: #E4EAED;
    }
    .user-panel .panel-body{
        min-height: $user-panel-body-height;
        padding: 15px 15px 6px 15px;
    }
    .avatar-data{
        font-size:11px;
    }
    .pagination {
        margin: 0px  !important;
        border-radius: 4px;
    }
    .sep{
        min-height:$user-panel-body-height;
        border-right:1px solid rgba(0, 0, 0, 0.12);
        width:2px;
    }

    .this-user-label{ font-size:10px; font-weight: bold; line-height:  ($user-rep-button-height +3); text-align: center; }

</style>