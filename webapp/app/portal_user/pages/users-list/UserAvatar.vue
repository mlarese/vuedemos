<template>
    <div class="user-avatar">
        <div class="pull-left mr">
            <img :src="user.image_path||'//reservation.cmsone.it/common/images/sb/settimana-bianca-avatar.jpg'" alt="Image" class="media-box-object img-circle thumb48">
        </div>
        <div class="avatar-data">
            <div class="text-bold text-sm">{{user.surname}} {{user.fullname}}</div>
            <div class="ucase text-xxs mb-sm ">{{$t( 'user code' )}} <span class="text-orange">{{user.code}}</span></div>
            <div class="text-xxs">{{$t( 'user since' )}} {{user.userSince }}</div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'UserAvatar',
        props:['user']
    }
</script>
<style lang="scss">
</style>