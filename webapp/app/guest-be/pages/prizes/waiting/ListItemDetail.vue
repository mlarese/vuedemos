<template>
    <div class="prizes-waiting-list-item-detail " >
        <detail :item="current" />
    </div>
</template>
<script>
    import Detail from '../../../../prize/pages/require-prize/DetailedPrize'
    export default{
        components:{
            Detail
        },
        props: ['item'],
        computed:{
            current(){
                return this.item.prize
            }
        },
    }
</script>
<style lang="scss">
    @import '../vars';
    @import '../../../../portal_user/pages/users-list/vars';

    .prizes-waiting-list-item-detail{
        min-height:200px;
        padding:0px 10px 0px 10px ;
        .back-to-list{display: none}
        .button-select-prize {display: none}
        border:2px solid $bg-gift-dark;
    }
</style>