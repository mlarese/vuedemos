<template>
    <div class="row whitebox">
        <div class="col-md-12">
            <p>{{$t('Inserisci l\'importo che desideri ritirare')}}</p>
        </div>

        <div class="col-md-8">
            <div class="input-group">

                <vue-numeric
                    class="form-control"
                    currency="€"
                    separator="."
                    v-model="withdrawAmount"
                    :minus="false"
                    :precision="2"
                    :auto-select="true"
                    :disabled="!isCashbackEnough"
                 />

                <span class="input-group-btn">
                    <button :disabled="!canWithDraw" @click="onWithdraw" class="btn btn-default btn-warning" type="button">
                        <span>{{$t('PRELEVA IL TUO CASHBACK')}}</span> <span class=""ml-lg>&gt;</span>
                    </button>
                </span>
            </div>
            <p class="gray"><i>{{$t('Importo minimo ritirabile')}} € {{minAmount}},00</i></p>
        </div>

        <div class="col-md-12">
            <div v-if="!isCashbackEnough" class="alert bg-danger-light text-center">
                {{$t('Non hai maturato sufficente cashback')}}
            </div>
            <div v-if="isCashbackEnough && !recipientIsCompiled" class="alert bg-danger-light text-center">
                {{$t('Controlla i tuoi dati bancari')}}
                <div v-if="!isIbanValid && !isIbanEmpty"> {{$t('Codice iban non valido')}} </div>
            </div>

            <div v-if="message && hasError" class="alert bg-danger-light text-center">
                {{$t(message)}}
            </div>
            <div v-if="message && !hasError" class="alert bg-success-light text-center">
                {{$t(message)}}
            </div>
        </div>

    </div>
</template>

<script>
    import Base from './Base'
    import VueNumeric from '../../../../../assets/components/VueNumeric'
    import {mapGetters} from 'vuex'

    export default{
        extends : Base,
        components:{ VueNumeric  },
        computed:{
            ...mapGetters(['hasError'])
        },
        methods:{
            onWithdraw(){
                if(!this.canWithDraw) return;
                this.withdraw();
            }
        }
    }
</script>