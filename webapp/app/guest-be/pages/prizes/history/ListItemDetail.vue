<template>
    <div class="prizes-history-list-item-detail">
        <div class="panel m0">
            <div class="panel-body">
                  {{prize.description}}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['item'],
        computed:{
            shipping(){
                return this.item.shippingdata;
            },
            prize(){
                return this.item.prize;
            }
        },
    }
</script>
<style lang="scss">
    @import '../../../../be/app';
    @import '../vars';
</style>