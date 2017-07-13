<template>
    <div class="button-order-prize">
            <button
                :disabled="!canOrder"
                @click="onClick"
                class="select-btn wd-wide btn btn-warning">
                {{$t('ORDINA IL PREMIO')}} <span class="fa fa-angle-right ml-sm"> </span>
            </button>
    </div>
</template>
<script>
    import {mapActions,mapState,mapGetters} from 'vuex'


    export default{
        computed:{
            ...mapState(['message']),
            ...mapState('prize',['canOrder']),
            ...mapGetters('prize',['current','shipping'])
        },
        methods:{
            ...mapActions('prize',['requirePrize']),
            onClick(){
                this.requirePrize()
                    .then(res=>{
                        this.$router.push({name:'gift-thx'})
                    }).catch(err=>{
                        console.dir(err)
                    });
            }
        }
    }
</script>
<style></style>