<template>
    <div class="client-user-fidelity">
        <div class="page" v-if="fidelity && fidelity.recap">
            <div class="title_wrap">
                <h3 class="title">{{$t('IL TUO SALDO PUNTI')}}</h3>
            </div>

            <div class="row thebox">
                <div class="col-md-12">
                    <div class="row">

                        <div class="col-md-6 right_gutter r_line">
                            <p>
                                <span class="text-gray-medium">{{$t('Totale punti maturati')}}</span>
                                <br><span class="text-green bold">{{fidelity.recap.earnedPoints}} {{$t('punti')}}</span>
                            </p>
                        </div>

                        <div class="col-md-6 left_gutter">
                            <p>
                                <span class="text-gray-medium">{{$t('Totale punti già utilizzati')}}</span>
                                <br><span class="text-red bold">{{fidelity.recap.usedPoints}}  {{$t('punti')}}</span></p>
                        </div>

                    </div>
                    <div class="row">
                        &nbsp;
                    </div>
                    <div class="row">
                        <div class="col-md-6 right_gutter r_line">
                            <p class="bold">
                                <span class="black">{{$t('Il tuo saldo punti aggiornato ammonta a')}}:</span><br>
                                <span class="text-gray-medium saldo orange">{{fidelity.recap.balancePoints}} {{$t('punti')}}</span>
                            </p>
                        </div>
                        <div class="col-md-6 left_gutter">
                            <p>
                                <span class="text-gray-medium">{{$t('Totale punti in attesa di accredito')}} *</span><br>
                                <span class="bold text-gray-medium">{{fidelity.recap.accreditPoints}} {{$t('punti')}}</span></p>
                        </div>
                    </div>
                    <div class="row">  &nbsp;  </div>
                    <div class="row whitebox">
                        <div class="row head">
                            <div class="col-md-12">
                                <h4 class="text-gray-medium">{{$t('Ecco il dettaglio delle operazioni')}}</h4>
                            </div>
                        </div>

                        <history-list-item type="fidelity" v-for="(his,index) in fidelity.history" :key="index" :record="his"/>

                    </div>

                    <div class="row">
                        <div class="col-md-12 note m0 p0">
                                <pre>
* I punti di attesa di accredito si riferiscono a soggiorni prenotati ma non ancora trascorsi.
  Al ritorno del soggiorno i punti accumulati con tali prenotazioni verranno accreditati.
  In caso di cancellazione del soggiorno non verrà accreditato nessun punto.
  In caso di modifica delle date o del numero di ospiti, il numero totale di punti
  potrebbe subire delle variazioni in base al costo totale del soggiorno.
                                </pre>
                        </div>
                    </div>
                </div>
            </div></div>
    </div>
</template>
<script>
    import {mapActions,mapState,mapGetters} from 'vuex'
    import allFilters from '../../../../../assets/filters'
    import HistoryListItem from './index'
    import Vue from 'vue'

    let store = Vue.$ioc.resolve("store");

    export default{
        components:{HistoryListItem},
        filters:{
            ...allFilters
        },
        methods:{
            ...mapActions('guest',['getFidelity'])
        },
        computed:{
            ...mapState('guest',['fidelity','currentGuest','fidelityStatus'])
        },
        beforeRouteEnter (to, from, next) {
            const goOn = res=> next();
            store.dispatch('guest/getFidelity',null,{root:1})
                .then(goOn)
                .catch(goOn)
        }
    }
</script>
<style lang="scss">
    .client-user-fidelity pre{
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
        background: transparent;
        border:0;
        border-radius: 0;
        padding: 0;
        margin:0;
        font-style: italic;
        font-size: 12px;
    }

    .client-user-fidelity .thebox{
        padding:20px 20px 0 20px !important;
    }

</style>