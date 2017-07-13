<template>
    <div class="item-fid-and-cash row">

        <div class="col-xs-12 col-sm-3 col-lg-3 text-left  mb-sm">
            <display-value
                    class="points"
                    :label="$t('Punti generati')"
                    type="number"
                    :value="reservation.fidelity.earned" />
        </div>
        <div class="col-sm-2 hidden-xs">&nbsp;</div>
        <div class="col-xs-12 col-sm-3 col-lg-3">
            <display-value
                    class="cashback"
                    prefix="€"
                    :label="$t('Cashback generato')"
                    type="money"
                    :value="reservation.cashback.earned"/>
        </div>

    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import DisplayValue from '../../../../assets/components/DisplayValue'
    import ItemBase from './ItemBase'

    export default{
        extends:ItemBase,
        components:{ DisplayValue },
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
    .item-fid-and-cash{
       .display-value{
           min-width:230px;
           .value{min-width:80px;}
       }
    }
</style>