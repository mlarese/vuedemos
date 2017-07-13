<template>
    <div class="panel widget user-widget " :class="{[type]:true}">
        <div class="">
            <div class="col-xs-4 text-center user-widget-icon-el">
                <img :src="'images/'+type+'.svg'" width="42">
            </div>
            <div class="col-xs-8 widget-value">
                <div class="h2 text-left">
                    {{ui.value}} <span class="widget-value-label">{{ $t( ui.title ,{count: ''}, ui.value  ) }}</span>
                    <div class="widget-value-sub-label">{{ $t( ui.subTitle ,{count: ui.value  },ui.value) }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default{
        props: {
            type:{default:'cashback'},
            value:{default:0}
        },
        computed:{
            ui(){
                let value = this.value,title='',subTitle='',link=null;

                if(this.type=='cashback'){
                    title='cashback';
                    subTitle='waiting payment-pl';
                    link="go gifts manager";
                }else if(this.type=='gifts'){
                    title='gift-pl';
                    subTitle='waiting-send-pl';
                    link='go gifts manager';
                }else if(this.type=='users'){
                    title='user-pl';
                    subTitle='subscribe-pl';
                }
                return {title,subTitle,value,link}
            }
        }
    }

</script>

<style lang="scss">
    @import "../../../../../assets/scss/app/variables";
    @import "../../../../../assets/scss/app/media-queries";
    @import "../../../../../assets/scss/app/utils-definitions";
    @import "../../../../../assets/scss/bootstrap/bootstrap/mixins/grid";
    @import "../../../../../assets/scss/bootstrap/bootstrap/mixins/clearfix";
    @import "../../../../../assets/scss/bootstrap/bootstrap/mixins/text-emphasis";
    @import "../../../../../assets/scss/bootstrap/bootstrap/mixins/background-variant";
    @import "../../../../../assets/scss/bootstrap/bootstrap/mixins/text-overflow";
    @import "../../../../../assets/scss/bootstrap/bootstrap/variables";
    @import "../../../../../assets/scss/bootstrap/bootstrap/type";
    @import "../../../../../assets/scss/breakpoint";
    @import "./vars";

    $user-widget-height : 90px;
    $user-widget-width : 100px;

    .user-widget {
        height:$user-widget-height;
        overflow:hidden;
        .widget-value{
            font-size:12px;
            position:absolute;
            top:-10px;
            left:$user-widget-width +10 ;
            margin-right:45px;
        }
        .widget-value-label{ font-size: 12px;   }
        .widget-value-sub-label{
            font-size: 9px;
            font-weight: normal ;
            line-height: 12px ;
            margin-right:25px;
        }
    }
    .user-widget-icon-el{
        height: ($user-widget-height - 1);
        width:$user-widget-width;
        line-height: $user-widget-height - 5;
    }
    .user-widget.cashback{
        @include make-bg($bg-cashback);
        .user-widget-icon-el{ @include make-bg($bg-cashback-dark); }
    }
    .user-widget.gifts{
        @include make-bg($bg-gift);
        .user-widget-icon-el{ @include make-bg($bg-gift-dark); }
    }
    .user-widget.users{
        @include make-bg($bg-users);
        .user-widget-icon-el{ @include make-bg($bg-users-dark); }
    }
</style>