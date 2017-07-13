<template>
    <div class="item-detail-item">
        <b><span>{{detail.name}}</span> <span>{{ $t(detail.board) }}</span></b>

        <span> {{ $t( 'adult-pl' ,{count: detail.guests.adults},detail.guests.adults*1 )   }} </span>
        <span> {{ $t( 'child-pl' ,{count: detail.guests.children.count  },detail.guests.children.count ) }} </span>

        <item-detail-item-accessories :accessories="detail.accessories" v-if="detail.accessories && detail.accessories.length>0" />

    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import ItemDetailItemAccessories from './ItemDetailItemAccessories'
    export default{
        props:['detail'],
        components:{ItemDetailItemAccessories},
    }
</script>
<style lang="scss">

</style>