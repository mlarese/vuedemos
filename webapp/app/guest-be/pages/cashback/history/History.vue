<template>

<div>

    <history
            domain="cashback"
            title="Storico cashback"
            :items="elaboratedRequests"
            :renderer="renderer" />

    <div class="alert bg-warning-light" v-if="elaboratedRequests.length==0">
        {{ $t( 'Nessun elemento trovato') }}
    </div>
</div>

</template>

<script>
    import {mapGetters} from 'vuex'
    import History from '../../History'

    export default{
        components:{ History },
        computed:{
            ...mapGetters('cashback',['elaboratedRequests']),
            renderer:()=>require('./ListItem'),
        }
    }
</script>
<style lang="scss">

</style>