<template>
    <div class="page detailed-prize">
        <div class="page__requestawards">
            <button-back-to-list class="back-to-list mb-lg" />
            <div class="row thebox">
                <div class="col-md-12">
                    <!-- notes -->
                    <div class="row reset_pad awards_wrap">
                        <div class="col-md-12">
                            <h2 class="bold">{{$t(prize.imageTitle)}}</h2>
                            <p class="bold">
                                {{$t('Puoi richiedere questo premio con')}}
                                <span class="bold orange">{{prize.requiredPoints}} {{$t('punti')}}</span>
                            </p>
                        </div>
                        <div class="col-md-12">
                            <div class="p_image pull-left">
                                <img :src="prize.image" :alt="$t(prize.imageTitle)">
                            </div>
                            <p>{{$t('DESCRIZIONE')}}</p>
                            <p class="parag description">{{$t(prize.imageDescription)}}</p>
                            <span class="clearfix"></span>
                            <p>&nbsp;</p>

                            <center v-if="prize.selectable  ">
                                <button class="button-select-prize btn btn-warning btn-md center pl-xl pr-xl" @click="onRequire">
                                    <span class="mr-sm">{{$t('RITIRA IL PREMIO')}}</span>
                                    <i class="fa fa-angle-right"></i>
                                </button>
                            </center>
                        </div>
                    </div>
                    <!-- record 1 chat off -->
                    <div class="row reset_pad awards_wrap">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions,mapState,mapGetters} from 'vuex'
    import RequestedPrize from './RequestedPrize'
    import ButtonBackToList from './ButtonBackToList'

    export default{
        extends:RequestedPrize,
        components:{ ButtonBackToList },
        props:['item'],
        methods:{
            onRequire(){
                this.$router.push({name:'gift-request'})
            }
        },
        computed:{
            prize(){
                if(!this.item)
                    return this.current ;
                else
                    return this.item;
            }
        }
    }
</script>
<style lang="scss">
    .detailed-prize{
        .description{
            text-align: justify;
        }
        .p_image{
            padding:0px 20px 20px 0px;
            img{ width:350px}
        }
    }
</style>