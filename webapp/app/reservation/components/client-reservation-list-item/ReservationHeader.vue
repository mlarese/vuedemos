<template>
    <!--------------------------------------------------------------------------------------
             Box with structure_name end reservation number  always visible
    ---------------------------------------------------------------------------------------->
    <div class="reservation-main-data-container row head">
        <div class="col-md-6">
            <h4 class="company">{{reservation.structure_name}}</h4>
        </div>
        <div class="col-md-6 text-right">
            <p>
                {{labels.made}} <span class="res_date bold">{{reservation.opendate | DMY }}</span>&nbsp;&nbsp;
                {{labels.number}} <span class="res_num bold orange">{{reservation.number}}</span>
            </p>
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
            labels(){  return this.$parent.labels;  },
            reservation(){  return this.$parent.reservation;  }

        }
    }
</script>
<style></style>