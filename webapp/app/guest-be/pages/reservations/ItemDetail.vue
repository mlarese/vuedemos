<template>
    <div class="item-detail" v-if="visible">
        <hr />

        <template v-for="(detail,index) in reservation.roomsDetails">
            <div class="panel panel-default">
                <item-detail-item
                        :detail="detail"
                        :key="index"
                        class="text-left panel-body"/>
            </div>
        </template>

    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import ItemBase from './ItemBase'
    import ItemDetailItem from './ItemDetailItem'

    export default{
        extends:ItemBase,
        props:['visible'],
        components:{ ItemDetailItem },
    }
</script>
<style lang="scss">

</style>