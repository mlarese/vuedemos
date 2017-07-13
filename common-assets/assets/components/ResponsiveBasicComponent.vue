<template>
    <div>
        <resize-sensor @resize="onResize" ></resize-sensor>
    </div>
</template>
<script>
    import ResizeSensor from 'vue-resize-sensor';

    export default{
        name:'ResponsiveBasicComponent',
        data(){
            return {
                size:{width:0,height:0}
            } ;
        },
        components:{ ResizeSensor },
        methods:{
            onResize(size){
                console.log(size);
                //if(size.width>260) this.clazz='two-lines-value';
                //else   this.clazz='one-line-value';
            }
        },
    }

</script>
<style lang="scss">

</style>