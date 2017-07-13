<template>
    <!--------------------------------------------------------------------------------------
            Box with totals always visible
    ---------------------------------------------------------------------------------------->
    <div class="reservation-total-container">
            <span class="total-text">
                {{labels.total}} <span class="res_total bold">{{currency}} {{reservation.price|money }}</span>
            </span>

            <span v-if="isActual">
                <span class="cashback-text">
                    {{labels.cashbackWillEarn}} <span class="res_matur bold orange">{{currency}} {{cashback.waiting |money }}</span>
                </span>
                <span class="points-text">
                    {{labels.pointsWillEarn}} <span class="res_point bold orange">{{fidelity.waiting}}</span>
                </span>
            </span>

    </div>
</template>

<script>
    import allFilters from '../../../../../assets/filters'

    export default {
        filters:{
            ...allFilters
        },
        computed:{
            type(){return this.$parent.archivedType},
            isActual(){return this.type==='actual'},
            isActual(){return this.type==='actual'},
            isOld(){return this.type==='old'},
            currency(){  return this.$parent.currency;  },
            labels(){  return this.$parent.labels;  },
            reservation(){  return this.$parent.reservation;  },
            fidelity(){ return this.$parent.reservation.fidelity},
            cashback(){ return this.$parent.reservation.cashback}
        }
    }
</script>

<style>

</style>