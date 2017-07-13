<template>
    <div class="button-check-modify form-group ">
        <button @click="checkReservation" :disabled="!isDirty || isCheckingStatus "  class="control-button btn btn-warning btn-sm uppercase">{{labels.find}}</button>
        <span class="spinner-container" v-if="isCheckingStatus ">
            <i class="fa fa-spinner fa-spin fa-fw"></i>
        </span>
    </div>
</template>
<script>

export default {
    computed:{
        labels(){ return this.$parent.labels;  },
        isEditingStatus(){ return this.$parent.isEditingStatus  },
        isViewingStatus(){ return this.$parent.isViewingStatus  },
        checkReservation(){ return this.$parent.checkReservation  },
        isCheckingStatus(){ return this.$parent.isCheckingStatus;  },
        manageButtonDisabled(){ return this.$parent.manageButtonDisabled;  },
        cancelEditMode(){ return this.$parent.cancelEditMode;  },
        isDetailOpened(){ return this.$parent.isDetailOpened;  },
        isDirty(){ return this.$parent.isDirty;  }
    }
}
</script>
<style></style>