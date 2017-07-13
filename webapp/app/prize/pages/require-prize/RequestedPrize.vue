<template>
    <div  class="page">
        <requested-prize-detail/>
        <shipping-data />
        <div v-if="message" class="mt-sm mb0 alert bg-danger-light text-center col-xs-12" v-html="message"></div>
        <div class="col-sm-4 col-sm-offset-4 mt-lg mb-lg">
            <button-order-prize/>
        </div>

    </div>
</template>

<script>
    import {mapActions,mapState,mapGetters} from 'vuex'
    import RequestedPrizeDetail from './RequestedPrizeDetail'
    import ShippingData from './ShippingData'
    import ButtonOrderPrize from './ButtonOrderPrize'

    export default{
        components:{    ButtonOrderPrize,ShippingData,RequestedPrizeDetail   },
        methods: {
            ...mapActions('prize', ['unselectPrize']),
            backToList(){
                this.unselectPrize().then(res=>{
                    this.$router.push({name:'gift'})
                }).catch(err=>{

                });

            }
        },
        computed: {
            ...mapState('prize', ['current']),
            ...mapState(  ['message'])
        }
    }
</script>
<style></style>