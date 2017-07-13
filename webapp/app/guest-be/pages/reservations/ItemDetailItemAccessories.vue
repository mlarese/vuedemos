<template>
    <div class="item-detail-item-accessories">
        <div class="h5 mb-0 pb-0">{{ $t( 'Accessori') }}</div>

        <template v-for="item in accessories">
            <item-detail-item-accessory :accessory="item"  />
        </template>
    </div>
</template>

<script>
    import ItemDetailItemAccessory from './ItemDetailItemAccessory'
    export default{
        props:['accessories'],
        components:{ ItemDetailItemAccessory },
    }
</script>
<style lang="scss">

</style>