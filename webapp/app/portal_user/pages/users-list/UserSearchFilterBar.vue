<template>

    <div class="user-search-filter-bar col-xs-12">

        <div class="user-search-filter-bar-title text-bold text-left">{{$t('filter users')}}</div>
        <div class="user-search-filter-container-wrapper row m0 mb-lg ">
            <div class="user-search-filter-container first" :class="cols" >
                <user-search-filter title="search"> <search-text-box/> </user-search-filter>
            </div>
            <div class="user-search-filter-container last" :class="cols" >
                <user-search-filter title="order-by">
                    <order-by-list/>
                </user-search-filter>
            </div>
        </div>

    </div>

</template>
<script>
    import UserSearchFilter from './UserSearchFilter';
    import SearchTextBox from './SearchTextBox';
    import OrderByList from './OrderByList';
    import _debounce from 'lodash/debounce'
    import AutoResizableBasicComponent from '../../../../../assets/components/AutoResizableBasicComponent'

    export default{
        extends:AutoResizableBasicComponent,
        data(){
            return {
                cols:'col-xs-6'
            };
        },
        components: {
            UserSearchFilter,
            SearchTextBox,
            OrderByList
        },
        methods: {
            resize(){
                let size = this.getSize();
                if(size.width>464) this.cols='col-xs-6';
                else   this.cols='col-xs-12';
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
    @import "../../../../../assets/scss/bootstrap/bootstrap/mixins/buttons";
    @import "../../../../../assets/scss/bootstrap/bootstrap/variables";
    @import "../../../../../assets/scss/bootstrap/bootstrap/type";

    @import "../../../../../assets/scss/breakpoint";
    @import "./vars";

    .user-search-filter-bar-title{
        margin-bottom:8px;
        font-size:13px;
    }

    .user-search-filter-container { padding:0 1px 0 1px;  }
    .user-search-filter-container-wrapper{
        background-color:#CFDBE2 !important;
        border-radius: 4px;
        padding:3px 0px 1px 1px;
    }


    .btn-flt {
        @include button-size(4px, 5px, $font-size-small, $line-height-small, $btn-border-radius-small);
        .caret.pull-right{
            position: relative;
            top:8px;
        }
    }
</style>