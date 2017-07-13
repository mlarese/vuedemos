<template>
    <div class="guest-data-view">
        <userresume-form/>

        <div class="text-left pt-md row">
            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2 mb-lg">
                <button class="btn btn-reset-pwd wd-wide"   v-html="$t('Reset password')" > </button>
            </div>


            <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                <warning-table
                    text="Con il reset password l'utente viene invitato via e-mail alla procedura per scegliere una nuova password. Essa sovrascrive la vecchia. L'utente non potrà accedere all'area cliente con la sua vecchia password."
                />
            </div>

        </div>
    </div>
</template>

<script>
    import UserresumeForm from '../../../guest/components/userresume/UserresumeForm'
    import WarningTable from '../../../../assets/components/WarningTable'
    export default{
        components: {UserresumeForm,WarningTable},
        prps: []
    }
</script>
<style lang="scss">
    .guest-data-view{
        .warning-table{
            .text{  font-size:12px; }
        }
    }
</style>