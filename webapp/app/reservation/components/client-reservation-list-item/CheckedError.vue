<template>
    <!--------------------------------------------------------------------------------------
             Box Check availability Error visible on isChecked_errorStatus  (server error on check)
     ---------------------------------------------------------------------------------------->
    <div class=" pv0 mt-lg" v-if="isChecked_errorStatus || isModify_errorStatus">
        <div class="edit-mode-check-date-not-available alert bg-danger-lighter"  >

            <h5>{{message}}</h5>
            {{labels['we are sorry system error']}}

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
            isChecked_errorStatus(){  return this.$parent.isChecked_errorStatus;  },
            isModify_errorStatus(){  return this.$parent.isModify_errorStatus;  },
            labels(){  return this.$parent.labels;  },
            error(){  return this.$parent.error;  },
            message(){  return this.$parent.message;  }
        }
    }
</script>
<style></style>