<template>
    <div >
        <div class="modal-mask" v-show="showModalMask"></div>
        <app-header />
        <div><router-view> </router-view></div>
        <messages :message="message"></messages>
        <loader :is-visible="loading"></loader>
        <app-footer />
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapState} from 'vuex'

    import '../../../assets/css/main.css';
    import '../../../assets/css/app.css';
    import '../../../assets/css/absfg.css';

    import Loader from '../../../../assets/components/loader'
    import Messages from '../../../../assets/components/messages'

    Vue.component('app-header', {  template: '#header-template'  })
    Vue.component('app-footer', {  template: '#footer-template'  })

    export default {
        computed:{
            ...mapState(['loading','message','showModalMask'])
        },
        components:{
            Loader,
            Messages
        }
    }
</script>
<style lang="scss">
    .modal-mask {
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .01);
        transition: opacity .3s ease;
        overflow-y: auto;
    }
    .spot-light{
        z-index: 10001;
        position:relative !important;
    }
</style>