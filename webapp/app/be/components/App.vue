<template>
    <div  class="app-container">
        <div><router-view> </router-view></div>
        <messages :message="message"></messages>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapGetters,mapState} from 'vuex'
    import Loader from '../../../../assets/components/loader'
    import Messages from '../../../../assets/components/messages'
    let appLayoutState = Vue.$ioc.resolve('app-state');

    export default {
        computed:{
            ...mapGetters(['isLoading' ]),
            ...mapState([ 'message']),
        },
        components:{
            Loader,
            Messages
        }
    }

</script>

<style lang="scss">
    @import '../../../../assets/scss/bootstrap.scss';
    @import '../../../../assets/scss/core.scss';
</style>

<style>
    @import '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>


<style lang="scss" scoped>
</style>