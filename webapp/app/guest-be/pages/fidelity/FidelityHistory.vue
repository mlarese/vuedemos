<template>
    <div class="fidelity-history" v-if="fidelity">
        <div class="h5 title">{{ $t( 'Storico operazioni') }} </div>
        <div class="panel panel-default pb-xs">
            <div class="panel-body">
                <template v-for="(his,fidIndex) in fidelity.history">
                    <history-list-item
                            class="bb"
                            type="fidelity"
                            :key="fidIndex"
                            :record="his"
                            :class="{'pt-lg':(fidIndex>0)}"
                            v-if="fidIndex<4 || showAll"
                            :valueComponent="valueComponent"
                    />
                </template>

                <div class="mt-md">
                    <toggle-label
                            @click.native="toggleShowAll"
                            show-text="Visualizza le operazioni precedenti"
                            hide-text="Nascondi le operazioni precedenti"
                            :show="showAll" />
                </div>
            </div>
        </div>

        <div class="information">
        * I punti di attesa di accredito si riferiscono a soggiorni prenotati ma non ancora trascorsi.
          Al ritorno del soggiorno i punti accumulati con tali prenotazioni verranno accreditati.
          In caso di cancellazione del soggiorno non verrà accreditato nessun punto.
          In caso di modifica delle date o del numero di ospiti, il numero totale di punti
          potrebbe subire delle variazioni in base al costo totale del soggiorno.
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import HistoryListItem from '../../../../assets/components/HistoryListItem'
    import FidelityValue from './FidelityValue'
    import ToggleLabel from '../../../../../assets/components/ToggleLabel'

    export default{
        data(){
            return{showAll:false}
        },
        methods:{ 
            toggleShowAll(){
                this.showAll = !this.showAll;
            }
        },
        components:{HistoryListItem,ToggleLabel},
        computed: {
            ...mapState('guest', ['fidelity']),
            valueComponent:()=>FidelityValue,
        }
    }
</script>
<style lang="scss">
    .fidelity-history{
        .information{
            font-style:italic;
            font-size:10px;
            padding:3px;
        }
    }
</style>