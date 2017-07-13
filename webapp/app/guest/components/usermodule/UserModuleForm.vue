<template>
        <div class="text-left user-module-form" >
            <div class="col-md-6">
                <p>{{ $t('firstname') }}*<br>
                    <input  :class="{'has-error':!validation.fullname}" @keypress="onChange" type="text" class="form-control" name="name" v-model="editGuest.fullname">
                </p>
                <p>{{ $t('lastname') }}*<br>
                    <input  :class="{'has-error':!validation.surname}" @keypress="onChange" type="text" class="form-control" v-model="editGuest.surname">
                </p>
                <p>{{$t('gender')}}*<br>
                    <v-select :searchable="false" :on-change="onGenderChange"   :value.sync="tGender" :options="getGenderOptions"></v-select>
                </p>
                <p>{{ $t('date_of_birth') }}*<br>
                    <masked-input :class="{'has-error':!validation.date_of_birth}" v-model="editGuest.date_of_birth" class="form-control" mask="11-11-1111"   />
                </p>
                <p>{{ $t('traveller_type') }}*<br>
                    <v-select :searchable="false" :on-change="onTravelChange" :value.sync="tTravelerType" :options="getTravelWithOptions"></v-select>
                </p>
            </div>

            <div class="col-md-6">
                <p>{{ $t('email address') }}*<br>
                    <input :class="{'has-error':!validation.email}"  @keypress="onChange" type="text" class="form-control" v-model="editGuest.email"></p>
                <p>{{ $t('telephone') }}*<br>
                    <input :class="{'has-error':!validation.telephone}"  @keypress="onChange" type="text" class="form-control" v-model="editGuest.telephone"></p>
                <p>{{ $t('city') }}*<br>
                    <input :class="{'has-error':!validation.city}"  @keypress="onChange" type="text" class="form-control" v-model="editGuest.city"></p>
                <p>{{ $t('address') }}*<br>
                    <input :class="{'has-error':!validation.address}"  @keypress="onChange" type="text" class="form-control" v-model="editGuest.address"></p>
                <p>{{ $t('zipcode') }}*<br>
                    <input :class="{'has-error':!validation.zipcode}"  @keypress="onChange" type="text" class="form-control" v-model="editGuest.zipcode">
                </p>
            </div>
        </div>
</template>


<script>
    import vSelect from 'vue-select'
    import MaskedInput from 'vue-masked-input'
    import { mapState,mapGetters,mapActions } from 'vuex';
    import _extend from 'lodash/extend';
    import _debounce from 'lodash/debounce';

    export default {
        name:'UserModuleForm',
        components:{ vSelect,MaskedInput  },
        data(){
            return {
                isDirty:false
            }
        },
        computed:{
            ...mapGetters('guest',{'validation':'validationEditGuest'}),
            ...mapGetters('guest',['getGenderOptions' , 'getTravelWithOptions','getEditGuest']),
            ...mapState('guest', ['editGuest'] ),
            user(){ 
                return this.editGuest;
            },
            tGender(){
                if(this.user.gender)
                    return this.$t(this.user.gender);

                return this.user.gender;
            },
            tTravelerType(){
                if(this.user.traveller_type)
                    return this.$t(this.user.traveller_type);

                return this.user.traveller_type;
            },
            fields(){
                let res = this.rebuildFieldsString();
                return res;
            }
        },
        created(){
            this.$watch('fields',_debounce(()=>{
                this.isDirty = true;
                //this.updateEditGuest(this.user);
            },500))
        },
        methods: {
            ...mapActions('guest',['updateEditGuest']),
            rebuildFieldsString(){
                let res = [];
                for(let key in this.user){
                    res.push(this.user[key])
                }
                return res;
            },
            onTravelChange(val){
                if(val && val.value ) this.user.traveller_type =  val.value;

            },
            onGenderChange(val){
                if(val && val.value ) this.user.gender =  val.value;

            },
            onChange(){

            }
        }
    }
</script>
<style lang="scss">
    .user-module-form{
        .has-error{
            border:2px solid red !important;
        }
        .v-select .selected-tag{
            border:0 !important;
            background-color: white !important;
        }
        .dropdown{
            background: white;
        }
        .no-padding-left{
            padding-left:0px !important;
        }
        .btn-width{
            width:150px !important;
            margin-bottom:5px;
        }
    }
</style>