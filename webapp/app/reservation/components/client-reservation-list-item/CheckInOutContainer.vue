<template>
    <!--------------------------------------------------------------------------------------
            Box with data checkin checkout always visible
    ---------------------------------------------------------------------------------------->
    <div class="check-in-out-container date-view-box-container">
            <div>
                <span>
                    <span>{{labels.from}}</span>
                    <span class="res_from bold"  >{{reservation.checkin | DMY }}</span>&nbsp;&nbsp;&nbsp;
                </span>

                <span>
                    <span class="form-group">{{labels.to}}</span>
                    <span   class="form-group res_to bold">{{reservation.checkout | DMY }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>

                <span >
                    <span class="form-group">{{labels.for}}</span>
                    <span class="form-group res_for bold">  {{totPax.adults}} {{lblAdults}} - {{totPax.children}} {{  lblChildren  }}   </span>
                </span>
            </div>

    </div>
</template>
<script>
    import allFilters from '../../../../../assets/filters'

    export default {
        filters:{
            ...allFilters
        },
        computed:{
            lblAdults(){  return this.$parent.lblAdults;  },
            lblChildren(){  return this.$parent.lblChildren;  },
            type(){return this.$parent.archivedType},
            totPax(){   return this.$parent.totPax;  },
            labels(){  return this.$parent.labels;  },
            currency(){  return this.$parent.currency;  },
            reservation(){  return this.$parent.reservation;  },
            modifyRequest(){  return this.$parent.modifyRequest;  }
        }
    }
</script>
<style></style>