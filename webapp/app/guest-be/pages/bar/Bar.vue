<template>
    <div class="text-left">
        <div>
            <button-back label="Torna alla lista utenti" :to="{name:'home'}"  class="inline"  />
            <bar-nav class="mt-sm hidden-sm hidden-xs inlineEl place-right"/>
            <meta  />
        </div>

    </div>
</template>
<script>
    import Base from "../Base"
    import ButtonBack from "../../../../assets/components/ButtonBack"
    import BarNav from "./BarNav"

    export default{
        extends:Base,
        components:{
            ButtonBack,
            BarNav
        }
    }

</script>
<style lang="scss">
    .hi {border: 0}
    .inlineEl {
        display: inline-block;
    }
    .place-right{
        position:absolute;
        right: 270px;
    }
</style>