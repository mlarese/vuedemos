<template>
    <div class="defaults" id="a-cashback">
        <section-title title="Cashback"/>
        <div class="row"> <waiting /> </div>
        <div class="row"> <status /> </div>
        <div class="row"> <history /> </div>
    </div>
</template>
<script>
    import Base from "../Base"
    import SectionTitle from "../SectionTitle"
    import Waiting from './waiting/Waiting'
    import Status from './Status'
    import History from './history/History'

    export default{
        extends:Base,
        components:{
            SectionTitle,
            Waiting,
            Status,
            History,
        }
    }
</script>
<style lang="scss">
    @import '../../../be/app';

    .cashback-waiting{
        .title{@extend .default-section-title;}
    }
    .cashback-history{
        .title{@extend .default-section-title;}
    }
</style>