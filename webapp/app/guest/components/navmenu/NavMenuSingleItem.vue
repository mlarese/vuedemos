<template>
    <div>
        <router-link  :to="{ name: item.action}" class="item" :disabled="isDisabled" tag="button">
            <span>{{ $t(item.label) }}</span>
            <span class="fa fa-angle-right"></span>
        </router-link>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default{
        name:'NavMenuSingleItem',
        props:['item'],
        computed:{
            ...mapState('guest',['formEditMode']),
            isDisabled(){
                return (this.formEditMode==='edit')
            },
        },
    }
</script>
<style lang="scss">
</style>