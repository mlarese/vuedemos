<template>
    <!--------------------------------------------------------------------------------------
        Box warning no available visible on isChecked_not_availableStatus
    ---------------------------------------------------------------------------------------->
    <div class="  mt-sm">
        <div class="edit-mode-confirm-date alert bg-warning-lighter"  v-if="isChecked_not_availableStatus">
            {{labels['we are sorry reservation period not available']}}
        </div>
    </div>
</template>
<script>
    export default {

        computed:{
            labels(){ return this.$parent.labels;  },
            isChecked_not_availableStatus(){ return this.$parent.isChecked_not_availableStatus  }
        }
    }
</script>
<style></style>