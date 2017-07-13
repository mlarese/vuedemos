<template>
    <div class="disclaim">
        *{{labels['new reservation date range disclaimer']}}
    </div>
</template>
<script>

export default {
    computed:{
        labels(){ return this.$parent.labels;  }
    }
}
</script>
<style></style>