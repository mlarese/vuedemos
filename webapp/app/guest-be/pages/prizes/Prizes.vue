<template>
    <div class="defaults" id="a-prizes">
        <section-title title="Premi"/>
        <div class="row">  <waiting />      </div>
        <div class="row">  <history />      </div>
    </div>
</template>
<script>
    import Base from "../Base"
    import SectionTitle from "../SectionTitle"
    import Waiting from "./waiting/Waiting"
    import History from "./history/History"

    export default{
        extends:Base,
        components:{SectionTitle,Waiting,History},
    }
</script>
<style lang="scss">
    @import '../../../be/app';

    .prizes-waiting{
        .title{@extend .default-section-title;}
    }
    .prizes-history{
        .title{@extend .default-section-title;}
    }
</style>