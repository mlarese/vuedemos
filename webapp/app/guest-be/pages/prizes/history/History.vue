<template>
    <div>
        <history
                domain="prizes"
                title="Storico premi inviati"
                :items="guestPrizesSent"
                :renderer="renderer" />

        <div class="alert bg-warning-light" v-if="guestPrizesSent.length==0">
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
            ...mapGetters('prize',['guestPrizesSent']),
            renderer:()=>require('./ListItem'),
        }
    }
</script>
<style lang="scss">

</style>