<template>
    <div class="date-view-box-container">

            <div v-if="isVisible" class="alert alert-warning">
                    <h6 class="bold uppercase">{{ labels['pending period request'] || "Richiesta di modifica periodo di prenotazione."   }}</h6>
                    <span>
                        <span>{{labels.from}}</span>
                        <span class="res_from bold"  >{{modifyRequest.checkin | DMY }}</span>&nbsp;&nbsp;&nbsp;
                    </span>

                    <span>
                        <span class="form-group">{{labels.to}}</span>
                        <span   class="form-group res_to bold">{{modifyRequest.checkout | DMY }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>

                    <span class="total-text">
                         {{labels.total}} <span class="res_total bold">{{currency}} {{modifyRequest.price|money }}</span>
                    </span>
            </div>
    </div>
</template>
<script>
    import allFilters from '../../../../../assets/filters'
    import _has from 'lodash/has'

    export default {
        filters:{
            ...allFilters
        },
        computed:{
            isVisible(){

                if(this.type==='old' || this.isCancelStatusExecuted)
                    return false;

                return   this.hasModifyRequest  ;
            },

            type(){  return this.$parent.archivedType;  },
            lblAdults(){  return this.$parent.lblAdults;  },
            lblChildren(){  return this.$parent.lblChildren;  },
            totPax(){  return this.$parent.totPax;  },
            labels(){  return this.$parent.labels;  },
            currency(){  return this.$parent.currency;  },
            reservation(){  return this.$parent.reservation;  },
            modifyRequest(){  return this.$parent.modifyRequest;  },
            hasModifyRequest(){  return this.$parent.hasModifyRequest;  },
            isCancelStatusExecuted(){ return this.$parent.isCancelStatusExecuted},
        }
    }
</script>
<style></style>