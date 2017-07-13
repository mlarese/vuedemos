<template>

    <div class="cashback-waiting-change-state">
 
        <div class="h4 default-panel-title"> {{ $t( 'Status cashback') }} </div>

        <div class="col-xs-12 pl0 pr0 ">
            <warning-table
                    text="Cambia lo Status Cashback in 'Evaso' solo quando hai effettuato il bonifico, l'utente riceverà una mail di avviso."
            />
        </div>

        <div class="col-xs-12 p0 pr-md ">
            <action-combo
                    @change="changeState"
                    class="cashback-add-on"
                    image="images/cashback.svg"
                    :options="cashbackStates"
                    v-model="state" />
        </div>
        <div class="col-xs-12 p0 pr-md ">
            <button
                :disabled="state.value=='c'"
                @click="onSendCashback"
                class="btn btn-primary wd-wide">{{ $t( 'Invia') }}</button>
        </div>


    </div>
</template>
<script>
    import WarningTable from '../../../../../assets/components/WarningTable'
    import _find from 'lodash/find'
    import {mapState,mapActions} from 'vuex'
    import ActionCombo from '../../ActionCombo'

    export default{
        components: {WarningTable,ActionCombo},
        props: ['item'],
        data(){
            return {   state:{}   }
        },
        created(){
            this.state=   _find(this.cashbackStates,{value:this.item.status});
        },
        computed:{
            ...mapState('cashback',['cashbackStates']),
        },
        methods:{
            ...mapActions('cashback',['sendCashback','loadRequests']),
            onSendCashback(){
                this.sendCashback().then(res=>{
                    this.loadRequests();
                }) ;
            },
            changeState(newState){
                this.state = newState;
            } ,
        },
    }
</script>
<style lang="scss">
    @import '../../../../be/app';
    @import '../../../../portal_user/pages/users-list/vars';

    .cashback-waiting-change-state{
        .selected-tag{
            font-size: 14px !important;
        }
        .cashback-add-on{
             .action-combo-image{
                background: $bg-cashback-dark !important;
                border:0;
            }
        }
        .dropdown{
            button{min-height: 28px; border-radius: 0px 4px 4px 0px}
        }
    }
</style>