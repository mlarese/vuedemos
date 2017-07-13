<template>
    <div class="user-code-edit">

        <div class="row">

            <div class="col-xs-6 col-lg-6">
                <span class="user-code-label">{{$t('user-code')}}</span>
            </div>

            <!-- -->
            <div class="col-xs-4 col-lg-4" >
                <span  class="user-code-val"  v-if="editMode=='view'">{{user.code}}</span>
                <span  class="user-code-input" v-if="editMode=='edit'">
                    <input ref='userCode' type="text" v-model="user.code"  class="user-code">
                </span>
            </div>

            <div class="col-xs-2 col-lg-2 text-right">
                <span @click="onEdit" class="pointer code-icon" v-if="editMode=='view'"><i class="fa fa-pencil"></i></span>
                <span @click="onSave" class="pointer code-icon" v-if="editMode=='edit'"><i class="fa fa-save"></i></span>
            </div>



        </div>

    </div>
</template>


<script>
    import { mapState,mapActions } from 'vuex';
    import _delay from 'lodash/delay'

    export default {
        data(){
            return{
                editMode:'view'
            }  
        },
        methods:{
            onEdit(){
                this.editMode='edit';
                _delay(()=>{
                    this.$refs.userCode.focus();
                    this.$refs.userCode.select();
                },10)

            },
            onSave(){
                this.editMode='view';
            }
        },
        computed:{
            ...mapState('guest',{
                user:'currentGuest'
            })
        }
    }
</script>
<style lang="scss">

    .user-code-edit{
        text-align: left;
        padding:4px 0 2px 0;
        line-height: 18px;
        font-size:11px;
        .user-code-label{
            text-transform: uppercase;
        }
        .code-icon{
        }
        .pointer{
            cursor: pointer;
        }
        .user-code-val{
            margin-left:4px;
            color:goldenrod;
            font-weigt:bold;
        }
        input.user-code{
            border:0;
        }
    }
</style>