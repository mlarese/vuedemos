<template>
    <div class="check-header">
        <h5 class="bold" >{{ $t( 'Richiedi la modifica del periodo di prenotazione') }}</h5>
        <h6 class="uppercase verify-label" v-html="labels['check new reservation date range']"></h6>
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