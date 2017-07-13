<template>
    <div class="section-title">
        <div class="row pb-sm h3 title text-left"  >

            <div :class="titleCols" class="title p0">
                {{$t(title)}}
            </div>
            <div class="text-right" :class="toolsCols" >
                <slot name="tools">

                </slot>
            </div>
        </div>


    </div>
</template>
<script>
    export default{
        props:{
            title:{default:''},
            slotCols:{default:2},
        },
        computed:{
            titleCols(){
                return 'col-xs-'+ (12-this.slotCols)
            },
            toolsCols(){
                return 'col-xs-'+ this.slotCols;
            }
        }

    }
</script>

<style lang="scss">
    .section-title .h3.title {
        border-bottom: 2px solid grey;
        font-weight: bold;
        .pointer {cursor:pointer}
    }
</style>