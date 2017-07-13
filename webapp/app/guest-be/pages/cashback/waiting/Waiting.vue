<template>
    <div class="cashback-waiting">
        <div class="prizes-waiting">
            <div class="h5 title">{{ $t( 'Cashback in attesa d\'invio') }}</div>
            <template v-for="(p,key,i) in pendingRequests">
                <component  :is="renderer" :item="p" :key="i" class="mb-lg"  />
            </template>
            <div class="alert bg-warning-light" v-if="pendingRequests.length==0">
                {{ $t( 'Nessuna richiesta di cashback è in attesa') }}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'

    export default{
        computed: {
            ...mapGetters('cashback', ['pendingRequests']),
            renderer:()=>require('./ListItem'),
        }
    }

</script>
<style lang="scss">

</style>