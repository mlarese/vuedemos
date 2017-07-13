<template>
	<div class="userresume">
		<div class="flex__between title_wrap">
			<h3 class="title">{{ $t('your profile') }} </h3>
			<div class="action flex__vcenterright">
				<button @click="modeEdit" class="btn-edit btn btn-default b0"><i class="fa fa-pencil"></i></button>
			</div>
		</div>
		<userresume-form   />
	</div>
</template>

<script>
    import { mapState,mapActions } from 'vuex';
	import UserresumeForm from './UserresumeForm'

	export default {
	    props:{
	    	link:{default:'edit-profile'}
		},
        methods:{
            ...mapActions('guest',['modeView','modeEdit']),
        },
		components:{UserresumeForm},
        computed:{
            ...mapState('guest',{
                user:'currentGuest'
            })
        }
	}
</script>

<style lang="scss">

	.userresume{
		.flex__vcenterright{
			display:flex !important;
		}
		.flex__between{
			display:flex !important;
		}
		.btn-edit:hover{ background: transparent; }

	}
</style>