<template>
    <div class="be-avatar">
        <img :src="user.image||'http://absfrequentguest.cmsone.info/images/user_example.jpg'">

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

<style lang="scss">
     .be-avatar {
        padding: 2px;
        width: 100%;
        background-color: transparent;
        text-align: center;

         img {
             max-width: 200px;
             width: 85%;
             border-radius: 100%;
             margin-bottom: 5px;
         }
    }
</style>