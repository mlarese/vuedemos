<template>
    <div class="item-header">
        <div class="col-xs-12 col-sm-6  text-left structure-name">{{reservation.structure_name}}</div>
        <div class="col-xs-12 col-sm-6  text-right ">
            <span class="open-date">
                <span class="desc">{{$t('Effettuata il')}}</span>
                <span class="value">{{ reservation.opendate|DMY }}</span>
            </span>
            <span class="number">
                <span class="desc">{{$t('N. Prenotazione')}}</span>
                <span class="value">{{reservation.number}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import ItemBase from './ItemBase'
    import {DMY} from '../../../../../assets/filters/date'
    export default{
        extends:ItemBase,
        filters:{
            DMY
        }
    }
</script>
<style lang="scss">

</style>