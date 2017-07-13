<template>
    <div>
        <recap
                :waiting ="currentGuestCashback.earned||0"
                :earned ="currentGuestCashback.earned||0"
                :used ="currentGuestCashback.retired||0"
                :total ="currentGuestCashback.earned||0"
                domain="cashback"
                type="money"
                prefix="€"
        />
    </div>
</template>

<script>
    import {  mapGetters} from 'vuex'
    import Recap from '../Recap'

    export default{
        components:{ Recap },
        computed: {
            ...mapGetters('guest', ['currentGuestCashback']),
        }
    }

</script>

<style lang="scss">

</style>