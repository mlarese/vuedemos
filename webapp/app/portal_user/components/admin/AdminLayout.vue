<template>
    <div class="wrapper admin-layout">
        <slot name="header"></slot>
        <!-- sidebar-->
        <aside class="aside">
            <div class="aside-inner">
                <slot name="left"></slot>
            </div>
        </aside>
        <section>

            <div class="content-wrapper" >
                <slot name="title"></slot>

                <div class="row">
                    <div class="col-xs-12 text-center router-view"  >
                        <router-view></router-view>
                    </div>
                </div>

            </div>
        </section>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    import _has from 'lodash'
    import $ from "jquery";
    import {mapState} from 'vuex'

    export default {
        data(){
            return   {
                contentWrapperWidth:0
            }
        },
        computed:{
            ...mapState(['debugMode']),
        },
        props:['collapsed'],
        watch:{
            collapsed(){
                if(this.collapsed){
                    $("body").addClass("aside-collapsed");
                }else{
                    $("body").removeClass("aside-collapsed");
                }
            }
        }
    }
</script>

<style lang="scss">
    .wrapper {
        background-color: #fafbfc;
        overflow: hidden;
    }
    .content-wrapper{
        overflow: hidden;
    }
    .router-view{
        overflow: auto;
        min-height:120px;
        margin-top:70px;
    }
    body {
        color: #58666e;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif,"Source Sans Pro";
        font-size: 14px;
        line-height: 1.42857;
    }

    .admin-layout .sticked {
        position: fixed;
        z-index:10;width:100%;
    }
</style>