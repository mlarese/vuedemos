<template>
    <div>
        <user-cash-back :user="guest"  columns="col-xs-6 col-md-3" />
    </div>
</template>
<script>
    import UserCashBack from '../../../portal_user/pages/users-list/UserCashBack'

    export default{
        props:['guest'],
        components:{ UserCashBack   }
    }

</script>
<style lang="scss">

</style>