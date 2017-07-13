<template>
	<div class="user_picture">
		<!-- router-link :to="menu.b.action" class="profile_edit"><i class="fa fa-pencil"></i></router-link -->
		<img :src="user.image||'http://absfrequentguest.cmsone.info/images/user_example.jpg'">
		<p class="name">{{ user.fullname }} {{ user.surname }}</p>
		<!-- p class="code_wrap">{{ label.avatar.userCode }}&nbsp;<span class="code">{{ user.id }}</span></p -->

	</div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed:{
            ...mapState('guest',{
                user:'currentGuest'
            })
        }
    }
</script>