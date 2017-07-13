<template>
    <div class="user-widget-bar content-wrapper bb pb0 mb-lg ml0 mr0">
        <div class="row">
            <div :class="cols" class="widget-item">
                <user-widget type="users" :value="totUsers"  />
            </div>
            <div :class="cols" class="widget-item">
                <user-widget type="gifts"  :value="totGifts" />
            </div>
            <div :class="cols" class="widget-item">
                <user-widget type="cashback" :value="totCashback"/>
            </div>
        </div>
    </div>

</template>
<script>
    import UserWidget from './UserWidget'
    import {mapState} from 'vuex'
    import _debounce from 'lodash/debounce'
    import AutoResizableBasicComponent from '../../../../../assets/components/AutoResizableBasicComponent'

    export default{
        extends:AutoResizableBasicComponent,
        data(){
            return {
                cols:'col-xs-4'
            }
        },
        methods:{
            resize(){
                let size = this.getSize();

                if(size.width>750) this.cols='col-xs-4';
                else   this.cols='col-xs-12';
            }
        },
        components:{UserWidget},
        computed:{
            ...mapState('portal_user',['totUsers','totGifts','totCashback'])
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

</style>