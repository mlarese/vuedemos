<template>
    <div class="item-recap">
        <span class="description">{{ $t( 'from') }}</span> <span class="value">{{reservation.checkin | DMY}}</span>
        <span class="description">{{ $t( 'to')  }}</span> <span class="value">{{reservation.checkout | DMY}}</span>

        <span class="description">{{ $t( 'for') }}</span>
        <span class="value"> {{ $t( 'adult-pl' ,{count:  pax.adults },pax.adults) }} </span> -
        <span class="value"> {{ $t( 'child-pl' ,{count: pax.children  },pax.children) }} </span>

    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import ItemBase from './ItemBase'
    import {DMY} from '../../../../../assets/filters/date'
    import {calcTotalPax} from '../../../reservation/reservationshlp.js'

    export default{
        extends:ItemBase,
        filters:{DMY},
        methods: {
            ...mapActions('guest', [''])
        },
        computed: {
            ...mapState('guest', ['']),
            ...mapGetters('guest', ['']),
            pax(){
                let tp = calcTotalPax(this.reservation);
                return tp;
            }
        }
    }
</script>
<style lang="scss">

</style>