<template>
    <display-value class="pull-right" :label="value.shortDescription" :class="statusClass" :sign="value.sign" :value="value.pd" type="number" />
</template>
<script>
    import DisplayValue from '../../../../assets/components/DisplayValue'

    export default{
        components: {DisplayValue},
        props:['value','statusClass'],
    }
</script>