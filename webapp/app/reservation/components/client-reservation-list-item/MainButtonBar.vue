<template>
    <!--------------------------------------------------------------------------------------
        Button bar :  always visible
        "Manage Reservation" (on not isEditingStatus)
        "Cancel Management" (on isEditingStatus)
        "Details"
    ---------------------------------------------------------------------------------------->
    <div class="main-button-bar">
        <div class="col-sm-6 p0"  >
            <!----  Button Manage Reservation  ----->
            <button v-if="isViewingStatus && !manageButtonDisabled" @click="enterEditMode"   class="btn btn-warning btn-sm uppercase">{{labels.manageReservations}}</button>
            <!----  Button Cancel  ----->
            <button v-if="!isViewingStatus && !isModify_successStatus" :disabled="isAjaxAction" @click="cancelEditMode" class="cancel-management  btn btn-sm uppercase">{{labels['cancel management']}}</button>
            &nbsp;
        </div>
        <div class="col-sm-6 text-right">
            <i v-if="!isDetailOpened">
                <p class="orange bold">
                    <span class="pointer" @click="toggleDetail" >+ {{labels.details}}</span>
                </p>
            </i>
            <i v-if="isDetailOpened">
                <p class="orange bold">
                    <span  class="pointer" @click="toggleDetail">- {{labels.details}}</span>
                </p>
            </i>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            labels(){ return this.$parent.labels;  },
            isEditingStatus(){ return this.$parent.isEditingStatus  },
            isViewingStatus(){ return this.$parent.isViewingStatus  },
            isDetailOpened(){ return this.$parent.isDetailOpened  },
            isModify_successStatus(){ return this.$parent.isModify_successStatus  },
            enterEditMode(){ return this.$parent.enterEditMode;  },
            manageButtonDisabled(){ return this.$parent.manageButtonDisabled;  },
            cancelEditMode(){ return this.$parent.cancelEditMode;  },
            isDetailOpened(){ return this.$parent.isDetailOpened;  },
            isAjaxAction(){  return this.$parent.isAjaxAction;  },
            toggleDetail(){ return this.$parent.toggleDetail;  }
        }
    }
</script>
<style></style>