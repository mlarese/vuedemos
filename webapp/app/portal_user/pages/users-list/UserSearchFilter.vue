<template>

    <div class="panel user-search-filter">
        <div class="panel-body pb0 pt0 text-left">
            <div class="h6 user-search-filter-title text-left text-bold">{{ $t(title) }} </div>
            <slot>

            </slot>
        </div>
    </div>

</template>
<script>
    export default{
        props:['title']
    }

</script>
<style lang="scss">
    $bradius: 4px;

    .panel.user-search-filter{
        background-color:#E4EAED !important;
        border-radius: $bradius;
        margin:0;
        padding-bottom:10px;
    }

    .user-search-filter-title {
        padding:0;
        margin-bottom:4px;

    }

</style>