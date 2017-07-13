<template>
    <div class="panel widget">
        <div class="panel-body">
            <div class="row row-table">
                <div class="text-center portal-avatar">
                    <img :src="image" alt="Image" class="img-thumbnail img-circle img-responsive thumb64">
                </div>
                <span class="current-structure-container">
                    <div class="current-structure-container-text" >{{  $t(title) }}</div>
                    <div class="current-structure-container-subtext" >{{ $t( subtitle ) }}</div>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:["image","title","subtitle"]
    }
</script>
<style scoped>
    .widget {
        box-shadow: 0 0px 0 0 white;
    }
    .current-structure-container{
        text-align: center;
        color:#427bab;
    }

    .portal-avatar .img-thumbnail {
        padding: 0 !important;
        border: 1px solid #ddd !important;
        margin-bottom:8px;
    }
</style>