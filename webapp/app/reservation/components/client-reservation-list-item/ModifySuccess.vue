<template>
    <div  class="modify-success" v-if="isModify_successStatus">

        <div class="alert bg-success-lighter">
            {{labels['modify request sent']||'Richiesta di modifica periodo di prenotazione inviata con successo'}}
        </div>

        <div class="center">
            <button @click="exitEditMode" class="expanded-button btn btn-success">{{labels['ok']||'Ok'}}  </button>
        </div>

    </div>
</template>
<script>
    export default {
        methods:{
            exitEditMode(){  this.$parent.exitEditMode();  }
        },
        computed:{
            labels(){ return this.$parent.labels;  },
            isModify_successStatus(){ return this.$parent.isModify_successStatus;  }
        }
    }
</script>
<style scoped lang="scss">
    $pad : 40px;

    .expanded-button{
        padding-left:$pad;
        padding-right:$pad;
    }
</style>