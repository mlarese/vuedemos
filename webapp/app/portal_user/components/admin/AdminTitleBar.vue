<template>
        <h3 class="page-title ng-scope">
            <span>{{ $t(pageTitle)}}</span>
            <small >{{$t(pageSubTitle) }}</small>
            <portal-target name="underTitle"  />
        </h3>


</template>
<script>
    import { mapState,mapActions } from 'vuex';

    export default {
        computed:{
            ...mapState('portal_user',[
                'pageTitle',
                'pageSubTitle'
            ])
        }
    }
</script>
<style>
    .brand-logo svg{
        max-width: 200px ;
    }
</style>