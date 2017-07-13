<template>
        <div class="panel text-left p0 m0 be-actions-component">
            <div class="row p0 m0 main">
                <div class="col-xs-10 col-md-11 body element p0 m0 text-left">
                    <slot name="left-panel"> </slot>
                </div>

                <div class="m0 p0 col-xs-2 col-md-1 icon element cursor-pointer" >
                    <slot name="right-panel"></slot>
                </div>
            </div>
        </div>
</template>

<script>
    import ToggleLabel from '../../../assets/components/ToggleLabel'

    export default{
        props:['item'],
        components:{  ToggleLabel },
    }

</script>
<style lang="scss">
    .be-actions-component.panel{border:0}
</style>