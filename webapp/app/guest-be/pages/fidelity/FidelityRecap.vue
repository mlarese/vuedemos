<template>
    <div>
        <recap
                :waiting ="currentGuestFidelity.earned||0"
                :earned ="currentGuestFidelity.earned||0"
                :used ="currentGuestFidelity.retired||0"
                :total ="currentGuestFidelity.earned||0"
                domain="fidelity"
                type="number"
        />
    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import Recap from '../Recap'

    export default{
        components:{ Recap },
        computed: {
            ...mapGetters('guest', ['currentGuestFidelity']),
        }
    }

</script>

<style lang="scss">

</style>