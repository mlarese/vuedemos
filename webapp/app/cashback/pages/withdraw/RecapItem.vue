<template>
    <p>
        <span :class="lclass">{{$t(label)}}</span><br>
        <span :class="vclass">{{value | money}} €</span>
    </p>
</template>
<script>
    import allFilters from '../../../../../assets/filters'

    export default{
        filters:{  ...allFilters    },
        props:['label','value','lclass','vclass']
    }

</script>
