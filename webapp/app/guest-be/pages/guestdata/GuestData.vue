<template>
    <div class="defaults guest-data absfg" id="a-userdata">
        <section-title title="Anagrafica">
            <div slot="tools"  >
                <span class="cursor-pointer" @click="modeEdit" v-if="isViewMode">
                    <i class="fa fa-pencil"></i>
                </span>
            </div>
        </section-title>
        <div class="page">
            <component :is="currentView"></component>
        </div>
    </div>
</template>

<script>
    import Base from "../Base"
    import SectionTitle from "../SectionTitle"
    import GuestDataView from "./GuestDataView"
    import GuestDataEdit from "./GuestDataEdit"
    import { mapState,mapActions } from 'vuex'

    export default{
        extends:Base,
        methods:{
            ...mapActions(['hideMessage']),
            ...mapActions('guest',['cancelUserData','updateUserData','modeView','modeEdit']),
            onChange(){

            } ,
            onCancel(){
                this.cancelUserData();
                this.hideMessage();
                this.modeView();
            },
            onSubmit(user){
                let pr = this.updateUserData();
                const self = this;
                pr.then(function(resp){
                    if(resp.status && resp.status==200){
                        this.modeView();
                    }
                });
            }
        },
        computed:{
            ...mapState('guest',{mode:'formEditMode'}),
            currentView(){
                if(this.mode==='view'){
                    return GuestDataView;
                }else{
                    return GuestDataEdit;
                }
            },
            isViewMode(){ return (this.mode==='view')   },
            isEditMode(){ return (this.mode==='edit')   }
        } ,
        components:{SectionTitle}
    }
</script>
<style lang="scss">
    @import "../../../be/app";
    .guest-data{
        .user-resume-form{
            background-color: white !important;
            .user-resume-form-field-value{
                color:$main-color !important;
            }
        }
        .btn-reset-pwd{
            color:$main-color !important;
            border-color: silver;
        }
        .guest-data-edit{
            .thebox{
                background-color: white !important;
            }
        }
    }

</style>