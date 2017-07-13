<template>
	<div v-if="user"  >
		<div class="title_wrap flex__between" v-if="showTitle">
			<h3 class="title">{{ $t('your profile') }}</h3>
		</div>

		<div class="row thebox edit  spot-light">
			<user-module-form />
			<user-module-form-buttons  class="mt-lg" />
		</div>
	</div>
</template>

<script>
    import vSelect from 'vue-select'
    import MaskedInput from 'vue-masked-input'
    import { mapState,mapGetters } from 'vuex';
    import _extend from 'lodash/extend';
	import UserModuleForm from './UserModuleForm'
	import UserModuleFormButtons from './UserModuleFormButtons'

    export default {
        components:{ vSelect,MaskedInput,UserModuleForm,UserModuleFormButtons  },
		props:{
            showTitle:{ default:false }
		},
		computed:{
			...mapGetters('guest',['getGenderOptions' , 'getTravelWithOptions']),
            ...mapState('guest',{user:'editGuest'}),
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

		},

        methods: {
            onTravelChange(val){
                if(val && val.value ){
                    this.user.traveller_type =  val.value;
                }
            },
            onGenderChange(val){
                if(val && val.value ){
                    this.user.gender =  val.value;
                }
            },
            onChange(){  } ,
        }
    }

</script>
<style>
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
</style>