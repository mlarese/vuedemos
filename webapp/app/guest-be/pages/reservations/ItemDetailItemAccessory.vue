<template>
    <div class="item-detail-item-accessory" v-if="accessory && accessory.name">
       <span class="name" >{{$t(accessory.name)}}</span>
    </div>
</template>

<script>
    export default{
        props:['accessory'],
    }
</script>
<style lang="scss">

</style>