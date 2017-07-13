<template>
    <div class="reservation-item item row">
        <div class="panel panel-default">

            <div class="panel-heading">
                <item-header :reservation="reservation"  />
            </div>
            <hr class="mb0" />
            <div class="panel-body">
                <item-recap             class="col-xs-12 col-sm-10 text-left "  :reservation="reservation" />
                <div class="item-detail-switch col-xs-12 col-sm-2 text-right mb-sm" >
                    <span @click="toggleDetail" class="cursor-pointer text" >  +{{$t('Dettagli')}} </span>
                </div>

                <item-fid-and-cash  :reservation="reservation" class="col-xs-12 col-lg-9 mt-sm mb-md" />
                <item-manage-button :reservation="reservation" :type="type" class="col-xs-12 col-lg-3 text-right" />

                <item-detail  :visible="isDetailsVisible" :reservation="reservation" class="col-xs-12" />

            </div>
        </div>
    </div>

</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import ItemRecap from './ItemRecap'
    import ItemFidAndCash from './ItemFidAndCash'
    import ItemManageButton from './ItemManageButton'
    import ItemHeader from './ItemHeader'
    import ItemDetail from './ItemDetail'

    export default{
        components:{ ItemRecap,ItemFidAndCash,ItemManageButton , ItemHeader,ItemDetail},
        props:['reservation','type'],
        data(){
            return {isDetailsVisible:false}
        },
        methods:{
            toggleDetail(){
                this.isDetailsVisible=!this.isDetailsVisible;
            }
        },
    }
</script>
<style lang="scss">
    @import './Item';
</style>