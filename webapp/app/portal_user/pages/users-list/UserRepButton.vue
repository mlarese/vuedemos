<template>
    <div class="panel widget user-rep-button" :class="{[type]:true}">
        <div>
            <div   class="pull-right text-center user-rep-button-icon-el">
                <span aria-hidden="true" class="text-bold">›</span>
            </div>
            <span   class="pull-left text-center user-rep-button-icon-el">
                <img :src="'images/'+type+'.svg'" width="20">
            </span>
            <div class="user-rep-button-body-el text-left">
                <div class="user-rep-button-label">
                    {{ $t(label)}}
                    <span :class="valueCssDisplay" v-if="isCashback"> €&nbsp;{{value | money}} </span>
                    <span :class="valueCssDisplay"  v-if="isGift"> {{value}}&nbsp;{{ $t( 'gift-pl' ,{count: value  },value) }} </span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import allFilters from '../../../../../assets/filters'
    import _debounce from 'lodash/debounce'
    import AutoResizableBasicComponent from '../../../../../assets/components/AutoResizableBasicComponent'

    export default {
        extends:AutoResizableBasicComponent,


        data(){
            return {
                valueCssDisplay:'two-lines-value'
            }
        },
        methods:{
            resize( ){
                let size = this.getSize();
                if(size.width>260) this.valueCssDisplay='two-lines-value';
                else if(size.width>255) this.valueCssDisplay='one-line-value';
                else   this.valueCssDisplay='one-line-value';
            }
        },
        filters:{...allFilters},
        props:['type','label','value'],
        computed:{
            isCashback(){  return (this.type=='cashback');   },
            isGift(){  return (this.type=='gifts');   }

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


    .user-rep-button.cashback{
        @include make-bg($bg-cashback);
        .user-rep-button-icon-el{ @include make-bg($bg-cashback-dark); }
    }
    .user-rep-button.gifts{
        @include make-bg($bg-gift);
        .user-rep-button-icon-el{ @include make-bg($bg-gift-dark); }
    }
    .user-rep-button{
        height:$user-rep-button-height !important;
        border-radius:$user-rep-button-icon-el-border-radius ;
        border:4px;
        margin-bottom:4px !important;
        .user-rep-button-label-ext{  display: none; margin:0;padding:0; }
        .user-rep-button-label{
            font-size: 10px;
            font-weight:normal ;
        }
        .user-rep-button-title{
            font-size: 10px;
            font-weight:normal ;
        }
        .user-rep-button-icon-el.pull-right {
            border-radius: 0 $user-rep-button-icon-el-border-radius $user-rep-button-icon-el-border-radius 0;
        }
        .user-rep-button-icon-el.pull-left {
            border-radius: $user-rep-button-icon-el-border-radius 0 0 $user-rep-button-icon-el-border-radius;
        }
        .user-rep-button-icon-el {
            height:$user-rep-button-height;
            width:$user-rep-button-height;
            line-height:  ($user-rep-button-height - 5);
        }
        .user-rep-button-body-el{
            height:$user-rep-button-height;
            padding:2px;
            margin-left:35px;
        }
    }

    .two-lines-value{display:block}
    .one-line-value{display:inline}

</style>