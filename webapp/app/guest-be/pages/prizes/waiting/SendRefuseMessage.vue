<template>
    <div class="prize-send-refuse-message">
        <div class="h4 default-panel-title"> {{ $t( 'Spedizione impossibile') }} </div>
        <div class="col-xs-12 pl0 pr0 mb-lg">
            <warning-table
               text="Invia un messaggio via e-mail all'utente per avvisarlo di eventuali incoerenze nell'indirizzo di spedizione riportato."
            />
        </div>

        <div class="col-xs-12 pl0 pr-sm mt-lg">
            <textarea v-model="text" rows="6" class="wd-wide"></textarea>
        </div>

        <div class="col-xs-12 p0 pr-sm mt-lg">
            <button @click="onSend" :disabled="!text"  class="btn wd-wide btn-primary btn-sm do-send"  >
                <span>{{ $t( 'Invia') }}</span>
            </button>
        </div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import WarningTable from '../../../../../assets/components/WarningTable'
    export default{
        methods:{
            ...mapActions('prize',['sendRefuseMessage']),
            onSend(){
                this.sendRefuseMessage(this.text)
            }
        },
        components: {WarningTable},
        props: ['item'],
        data(){
            return {
                text:null
            }
        },
    }

</script>
<style lang="scss">
    .prize-send-refuse-message {
        .do-send{ text-transform: uppercase}
    }
</style>