<template>
    <div :class="domain+'-history'">
        <div class="h5 title">{{ $t( title ) }}</div>

        <template v-for="(p,i) in items" >
            <component  :is="renderer" :item="p" :key="i"  />
        </template>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default{
        props:['domain','title','items','renderer'],
    }
</script>
<style lang="scss">

</style>