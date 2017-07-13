<template>
    <div class="guest-data-edit">
        <usermodule :show-title="false"  @on-cancel="onCancel" @on-submit="onSubmit"></usermodule>
        <div v-if="message" class="alert alert-danger mt-lg">

            {{message}}

        </div>
    </div>
</template>
<script>
    import Usermodule from '../../../guest/components/usermodule/Usermodule'
    import { mapState,mapActions } from 'vuex'

    export default{
        components: {Usermodule},
        computed:{
            ...mapState(['message'])
        },
        methods: {
            ...mapActions(['hideMessage']),
            ...mapActions('guest',['cancelUserData','updateUserData','modeView','modeEdit']),
            onSubmit(){
                let pr = this.updateUserData();
                pr.then((resp)=>{
                    if(resp.status && resp.status==200){
                        this.modeView();
                    }
                });
            },
            onCancel(){
                this.cancelUserData();
                this.hideMessage();
                this.modeView();
            }
        }
    }

</script>

<style lang="scss">

</style>

