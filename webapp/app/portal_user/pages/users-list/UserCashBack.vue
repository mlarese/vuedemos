<template>
    <div class="user-cash-back row">
        <div :class="col" class="total-points values mb-xs">          <display-value            type="number" label="total points"        :value="user.fidelity.earned" /> </div>
        <div :class="col" class="cashback-earned  values mb-xs">      <display-value prefix="€" type="money"  label="cashback earned"     :value="user.cashback.earned" /></div>

        <div :class="col" class="total-awards values mb-xs" >         <display-value            type="number" label="total awards"        :value="user.fidelity.retired" /> </div>
        <div :class="col" class="cashback-retired values mb-xs"  >    <display-value prefix="€" type="money"  label="cashback retired"    :value="user.cashback.retired" /></div>
    </div>
</template>

<script>
    import allFilters from '../../../../../assets/filters'
    import DisplayValue from '../../../../assets/components/DisplayValue'
    import {mapState} from 'vuex'
    import _debounce from 'lodash/debounce'
    import AutoResizableBasicComponent from '../../../../../assets/components/AutoResizableBasicComponent'

    export default{
        extends:AutoResizableBasicComponent,
        computed:{
            ...mapState(['debugMode'])
        },
        data(){
            return {
                col:'col-xs-6'
            }
        },
        created(){
            if(this.columns){
                this.col = this.columns;
            }
        },
        methods:{
            resize( ){
                let size = this.getSize();
                //console.log('cashback',size.width);

                if(size.width>313) this.col='col-xs-6';
                else this.col='col-xs-12';
            }
        },
        components: {
            DisplayValue
        },
        props:{
            user:{type:Object},
            columns:{default:null}
        }
    }
</script>

<style lang="scss">

    .display-value .label {
        height:100%;
        position: static !important;
    }

</style>