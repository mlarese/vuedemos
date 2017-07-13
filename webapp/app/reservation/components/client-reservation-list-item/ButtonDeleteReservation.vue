<template>
    <div class="button-delete-reservation">
        <!-- h5 class="bold">{{labels['cancel reservation']}}</h5 -->

        <button :disabled="isDisabled" @click="deleteReservation" class="control-button-delete control-button btn btn-danger btn-sm uppercase">
            {{ $t( 'richiedi la cancellazione della prenotazione') }}
        </button>
    </div>
</template>
<script>

export default {
    computed:{
        labels(){ return this.$parent.labels;  },
        deleteReservation(){ return this.$parent.deleteReservation  } ,
        isEditingStatus(){ return this.$parent.isEditingStatus  },
        isCancelStatusWaiting(){ return this.$parent.isCancelStatusWaiting},
        isCancelStatusExecuted(){ return this.$parent.isCancelStatusExecuted},
        isCancelStatusNone(){ return this.$parent.isCancelStatusNone},
        isDisabled(){

            if(  !this.isEditingStatus ) return true;
            if(  this.isCancelStatusNone ) return false;

            if(  this.isCancelStatusExecuted ) return true;
            if(  this.isCancelStatusWaiting ) return true;

            else return false;

        },
    }
}
</script>
<style></style>