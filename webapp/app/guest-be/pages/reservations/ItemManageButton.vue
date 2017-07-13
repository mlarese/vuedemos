<template>
    <div class="item-manage-button" v-if="type!=='old'">
        <button class="btn btn-primary">
            {{ $t( 'Gestisci prenotazione') }}
            <i class="fa fa-angle-right mr-sm"></i>
        </button>

    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import ItemBase from './ItemBase'

    export default{
        extends:ItemBase,
        methods: {
            ...mapActions('reservation', [''])
        },
        computed: {
            ...mapState('reservation', ['']),
            ...mapGetters('reservation', [''])
        }
    }
</script>
<style lang="scss">
</style>