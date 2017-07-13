<template>
    <div class="page__requestawards requested-page-detail" v-if="current">
        <button-back-to-list class=" mb-lg" />

        <div class="row thebox">
            <div class="col-md-12">
                <div class="row reset_pad awards_wrap">
                    <div class="col-md-12">
                        <h2 class="bold">{{$t(current.imageTitle)}}</h2>
                            <p class="bold">
                                {{$t('Puoi richiedere questo premio con')}}
                                <span class="bold orange">{{current.requiredPoints}} {{$t('punti')}}</span>
                            </p>
                    </div>
                </div>
                <div class="row reset_pad awards_wrap flex__between">
                    <div class="col-md-6">
                        <div class="p_image"><img :src="current.image" :alt="$t(current.imageTitle)"></div>
                    </div>
                    <div class="col-md-6 flex__colbetween">
                        <div v-if="current.additionalDescription">
                            <p class="parag">{{current.additionalDescription}}</p>
                        </div>
                        <div>
                            <p>{{$t('Note')}}<span v-if="current.additionalDescription">*</span></p>
                            <textarea v-model="orderNote" class="form-control" style="height:80px"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row reset_pad awards_wrap"> </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapState,mapGetters} from 'vuex'
    import RequestedPrize from './RequestedPrize'
    import ButtonBackToList from './ButtonBackToList'

    export default{
        components:{  ButtonBackToList },
        extends:RequestedPrize,
        computed: {
            ...mapState('prize', ['current']),
            orderNote: {
                get () { return this.$store.state.prize.orderNote },
                set (value) {  this.$store.commit('prize/SET_ORDER_NOTE', value,{root:true})   }
            }
        }
    }
</script>

<style lang="scss">
    .requested-page-detail{
        .p_image{
            padding:20px 20px 20px 0px;
            img{ width:350px}
        }
    }
</style>