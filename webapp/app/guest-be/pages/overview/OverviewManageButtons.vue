<template>
    <div class="overview-manage-button">
        <div class="panel panel-default" v-if="(guest.fidelity.earned + guest.cashback.earned)>0">

            <div class="panel-body bg-light" >
                <div class="col-sd-6 col-md-6 col-lg-6" v-if="guest.cashback.earned>0">
                    <user-rep-button  label="you have request cashback" :value="guest.cashback.earned"  type="cashback"   />
                </div>
                <div class="col-sd-6 col-md-6 col-lg-6" v-if="guest.fidelity.earned>0">
                    <user-rep-button  label="you have request to send" :value="guest.fidelity.earned"    type="gifts"  />
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import UserRepButton from '../../../portal_user/pages/users-list/UserRepButton'
    export default{
        components: {UserRepButton},
        props: ['guest']
    }
</script>

<style lang="scss">

    .overview-manage-button .panel-default{
        background:#E5EAEE;
    }

</style>