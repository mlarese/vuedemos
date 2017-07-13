<template>
    <div class=" top_button_wrap">
        <router-link class="btn btn-primary" :to="to" tag="a">
            <i class="fa fa-angle-left mr-sm"></i>{{$t(label)}}
        </router-link>
    </div>
</template>
<script>
    export default{
        props:['label','to']
    }
</script>