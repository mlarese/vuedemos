<script>
    import {mapActions,mapState,mapGetters} from 'vuex'
    import _debounce from 'lodash/debounce'
    import allFilters from '../../../../../assets/filters'

    export default{
        filters:{  ...allFilters    },
        created(){
            this.setWithdrawAmount=_debounce(value=>{
                this.$store.commit('cashback/SET_WITHDRAW_AMOUNT', value,{root:true});
            },400);
        },
        methods:{
            ...mapActions('cashback',['load','withdraw']),
        },
        computed:{
            ...mapState(['message','hasError']),
            ...mapState('cashback',['transferList' ,'summary','minAmount','recipient']),
            ...mapGetters('cashback',['canWithDraw','wdAmountIsValid','isCashbackEnough','recipientIsCompiled','isIbanValid','isIbanEmpty']),
            withdrawAmount: {
                get ()      { return this.$store.state.cashback.withdrawAmount },
                set (value) { this.setWithdrawAmount(value); }
            },
        }
    }
</script>
