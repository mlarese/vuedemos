<template>
    <div>

        <div v-if="hasError" class="error-alert">
            <p  class="alert alert-danger">{{ $t(  message ) }}</p>
        </div>
    </div>
</template>
<script>
    import {mapActions,mapState,mapGetters} from 'vuex'

    export default{
        name:'ErrorAlert',
        computed:{
            ...mapState(['error','message']),
            ...mapGetters(['hasError'])
        }
    }
</script>
<style lang="scss">

</style>