<template>
    <div class="prize-change-state">

        <div class="h4 default-panel-title"> {{ $t( 'Status premio') }} </div>
        <div class="warning ">

            <div class="col-xs-12 pl0 pr0 ">
                <warning-table
                    text="Cambia lo Status Premio in 'Inviato' solo quando hai effettuato la spedizione della merce, l'utente riceverà una mail di avviso  spedizione."
                />

            </div>


            <div class="col-xs-12 p0 pr-sm mb-sm">

                <action-combo
                        @change="changeSelectState"
                        class="gift-add-on"
                        image="images/gifts.svg"
                        :options="prizeStates"
                        v-model="state" />
            </div>

            <div class="col-xs-12 p0 pr-sm mt-lg">
                <button @click="onClick"  class="btn wd-wide  update-state" :disabled="state.value===item.status">
                    <span>{{ $t( 'Aggiorna Status') }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import _find from 'lodash/find'
    import {mapState,mapActions} from 'vuex'
    import ActionCombo from '../../ActionCombo'
    import WarningTable from '../../../../../assets/components/WarningTable'

    export default{
        components: {WarningTable,ActionCombo},
        props:['item'],
        data(){
            return {    state:{}   }
        },
        created(){
            this.state=   _find(this.prizeStates,{value:this.item.status});
        },
        computed:{
            ...mapState('prize',['prizeStates']),
        },
        methods:{
            ...mapActions('prize',['changeState']),
            onClick(){
                this.changeState(this.item)
                .then(res=>{
                    alert("sent")
                }).catch(err=>{

                });

            },
            changeSelectState(newState){
                this.state = newState;
            } ,
        },
    }
</script>
<style lang="scss">
    @import '../../../../be/app';
    @import '../../../../portal_user/pages/users-list/vars';

    .prize-change-state{
        .selected-tag{
            font-size: 14px !important;
        }
        .gift-add-on{
            .action-combo-image{
                background: $bg-gift-dark !important;
                border:0;
            }
        }

        button.update-state{
            text-transform: uppercase;
            font-style: normal;
            background: $bg-gift-dark;
            color:white;
        }
    }


</style>