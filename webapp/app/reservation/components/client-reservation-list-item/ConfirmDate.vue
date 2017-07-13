<template>
    <!--------------------------------------------------------------------------------------
        Box confirm after checking availability,
            visible on
                isChecked_availableStatus
                isModifingStatus
    ---------------------------------------------------------------------------------------->
    <div class="confirm-date edit-mode-confirm-date"  v-if="isChecked_availableStatus || isModifingStatus">
        <div class="panel panel mv" v-if="checkModifyResult.response">
            <div class="alert bg-warning-lighter mb0">
                {{labels['confirm reservation period change']}}
            </div>

            <div class="panel-body">
                <h5 class="bold">{{labels["original period"]||'Periodo originale'}}</h5>
                <div class="mt">
                    {{labels.from}} <span class="bold">{{reservation.checkin |  DMY  }}</span> -
                    {{labels.to}} <span class="bold">{{reservation.checkout | DMY }}</span>
                </div>
                <div>
                    {{labels['price']||'Prezzo'}} <span class="bold">{{currency}} {{checkModifyResult.response.price | money }}</span>
                </div>

                <hr>

                <h5 class="bold">{{labels["new period"]||'Nuovo periodo'}}</h5>
                <div class="mt">
                    {{labels.from}} <span class="bold">{{checkModifyResult.checkin |  DMY  }}</span> -
                    {{labels.to}} <span class="bold">{{checkModifyResult.checkout | DMY }}</span>
                </div>

                <div>
                    {{labels['price']||'Prezzo'}} <span class="bold">{{currency}} {{checkModifyResult.response.price | money }}</span>
                </div>

                <div>
                    <span>
                        <button :disabled="isAjaxAction" @click="updateReservation" class="btn btn-warning mt uppercase">{{labels.confirm || 'Conferma'}}</button>
                    </span>
                    <span>
                        <button :disabled="isAjaxAction" @click="backToEditMode" class="btn btn-warning mt uppercase">{{labels.changePeriod || 'Cambia periodo'}}</button>
                    </span>

                    <span class="spinner-container modifing" v-if="isModifingStatus">
                        <i class="fa fa-spinner fa-spin fa-fw"></i>
                    </span>

                </div>
            </div>

        </div>
    </div>

</template>
<script>
    import allFilters from '../../../../../assets/filters'

    export default {
        filters:{
            ...allFilters
        },
        methods:{
            cancelEditMode(){   this.$parent.cancelEditMode()  },
            backToEditMode(){   this.$parent.backToEditMode()  },
            enterEditMode(){   this.$parent.enterEditMode()  },
            updateReservation(){   this.$parent.updateReservation()  }
        },
        computed:{
            isChecked_availableStatus(){  return this.$parent.isChecked_availableStatus;  },
            isModifingStatus(){  return this.$parent.isModifingStatus;  },
            labels(){  return this.$parent.labels;  },
            reservation(){  return this.$parent.reservation;  },
            currency(){  return this.$parent.currency;  },
            checkModifyResult(){  return this.$parent.checkModifyResult;  },
            isAjaxAction(){  return this.$parent.isAjaxAction;  }
        }
    }
</script>
<style></style>