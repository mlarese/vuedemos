<template>
    <div class="require-prize">
        <div class="page">
            <div class="page__requestawards">
                <div class="title_wrap flex__between">
                    <h3 class="title ">{{$t('RICHIEDI PREMI')}}</h3>
                    <div class="action flex__vcenterright"> </div>
                </div>

                <error-alert />
                <div class="row thebox" v-if="!hasError">
                    <div class="col-md-12">
                        <!-- notes -->
                        <div class="row reset_pad">
                            <div class="col-md-12" v-if="getAvailable.length>0">
                                <p class="bold">{{$t('Ecco i premi che puoi richiedere grazie ai punti che hai accumulato')}}</p>
                            </div>
                            <div class="col-md-12" v-if="getAvailable.length==0">
                                <p class="bold">{{$t('Non hai punti sufficienti per richiedere dei premi')}}</p>

                            </div>
                        </div>
                        <!-- record 1 chat off -->
                        <div class="row reset_pad awards_wrap">
                            <div class="record col-md-4 col-sm-6" v-for="(prize,index) in getAvailable" :key="index">
                                 <prize :prize="prize" />
                            </div>
                        </div>
                    </div>
                </div>
                <p>&nbsp;</p>
                <div class="row thebox" v-if="getNotAvailable.length>0">
                    <div class="col-md-12">
                        <!-- notes -->
                        <div class="row reset_pad">
                            <div class="col-md-12">
                                <p class="bold">{{$t('Con solo pochi altri punti potresti avere')}}</p>
                            </div>
                        </div>
                        <!-- record 1 chat off -->
                        <div class="row reset_pad awards_wrap">
                            <div class="flex__wrap">
                                <div class="record col-md-4 col-sm-6"  v-for="(prize,index) in getNotAvailable" :key="index">
                                    <prize :prize="prize" />
                                </div>
                            </div>
                        </div>
                        <!-- notes -->
                        <div class="row reset_pad">
                            <div class="col-md-12">
                                <a :href="system.reservation_link" target="_blank">
                                    <p class="bold">{{$t('Cosa aspetti')}}? <span class="orange">{{$t('richiedi subito un soggiorno')}}</span></p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Prize from './Prize'
    import {mapActions,mapState,mapGetters} from 'vuex'
    import Vue from 'vue'
    import ErrorAlert from '../../../../../assets/components/ErrorAlert'

    let store = Vue.$ioc.resolve("store");

    export default{
        methods:{
            ...mapActions('prize',['loadList','selectPrize','unselectPrize',''])
        },
        computed:{
            ...mapState(['system','error']),
            ...mapState('prize',['list', 'current']),
            ...mapGetters('prize',['getAvailable','getNotAvailable']),
            ...mapGetters(['hasError']),
        },
        components:{Prize,ErrorAlert},
        beforeRouteEnter (to, from, next) {
            const goOn = res=> next();
            store.dispatch('prize/loadList',null,{root:1})
                .then(goOn)
                .catch(goOn)

        },
        created(){
            //this.loadList() ;
        }
    }
</script>
<style></style>