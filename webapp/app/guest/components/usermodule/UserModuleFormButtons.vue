<template>
    <div class="col-md-12 user-module-form-button">
        <div class="col-xs-6 text-center">
            <button type="submit" :disabled="!canUpdateEditGuest" class="btn-width btn btn-warning btn-submit" @click="onSubmit">{{$t(btnSubmitLabel)}}</button>
        </div>
        <div class="col-xs-6 text-center">
            <button class="btn-width btn btn-warning" @click="onCancel">{{$t(btnCancelLabel)}}</button>
        </div>
    </div>
</template>

<script>
    import { mapState,mapGetters,mapActions } from 'vuex';

    export default {
        components:{    },
        computed:{
            btnSubmitLabel(){
                if(!this.isValidEditGuest)
                    return 'Dati non validi';
                if(!this.isDirtyEditGuest)
                    return 'Non hai fatto modifiche';
                return 'Conferma';
            },
            btnCancelLabel(){
                if(this.isDirtyEditGuest)
                    return 'Annulla';
                return 'Esci';
            },
            ...mapState('guest',{user:'editGuest'}),
            ...mapGetters('guest',['isValidEditGuest','isDirtyEditGuest','canUpdateEditGuest']),
        },
        methods: {
            ...mapActions(['hideMessage']),
            ...mapActions('guest',['cancelUserData','updateUserData','modeView','modeEdit']),
            onSubmit(){
                this.updateUserData()
                    .then(res=>{
                        if(res.status && res.status==200){
                            this.modeView();
                        }
                    });
            },
            onCancel(){
                this.cancelUserData()
                this.modeView();
                this.hideMessage();
            }
        }
    }

</script>
<style lang="scss">

    .user-module-form-button {
        .btn{ text-transform: uppercase }
        .btn-width {
            width: 200px !important;
            margin-bottom: 5px;
        }
    }
</style>