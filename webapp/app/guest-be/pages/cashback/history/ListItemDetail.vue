<template>
    <div class="cashback-history-list-item-detail">

        <div class="panel m0">
            <div class="panel-body">
                <div class="h6 mb0 bold">{{ $t( 'Intestatario conto corrrente') }}</div>
                <div>{{item.name}} {{item.surname}}</div>
                <div class="h6 mb0 bold">{{ $t( 'Nazione') }}</div>
                <div>{{item.country}} </div>
                <div class="h6 mb0 bold">{{ $t( 'Note') }}</div>
                <div>{{item.note}}</div>

            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['item'],
    }
</script>
<style lang="scss">
    @import '../../../../be/app';
    @import '../../../../portal_user/pages/users-list/vars';
    @import '../vars';

</style>