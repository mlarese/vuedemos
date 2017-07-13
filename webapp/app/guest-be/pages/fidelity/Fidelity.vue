<template>
    <div class="defaults fidelity" id="a-fidelity">
        <section-title title="Punti" class="text-left"/>

        <div class="row">
            <fidelity-recap class="text-left"/>
        </div>

        <div class="row">
            <fidelity-history class="text-left"/>
        </div>

    </div>
</template>

<script>
    import Base from "../Base"
    import SectionTitle from "../SectionTitle"
    import FidelityRecap from "./FidelityRecap"
    import FidelityHistory from "./FidelityHistory"
    import {mapActions, mapState, mapGetters} from 'vuex'

    export default{
        extends:Base,
        components:{SectionTitle,FidelityRecap,FidelityHistory},
        computed: {
            ...mapState('guest', ['currentGuest']),
        }
    }
</script>

<style lang="scss">
    @import "../../../be/app";

    .fidelity{
        .fidelity-history{
            .title{@extend .default-section-title;}
            .history-list-item{
                font-size:12px;
                .description{font-weight:bold}
            }
            .toggle-btn-description{
                font-style: italic;
                font-size:12px;
                font-color:$main-color;
            }
        }
    }

</style>