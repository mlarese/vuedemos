<template>
    <div class="cashback-waiting-list-item">

        <div class="row p0 m0 main" v-if="item">
            <be-actions-component :item="item" class="cashback-waiting-list-item">
                <div slot="left-panel">
                    <div class="hidden-xs pull-right pull-request-date mr-lg pr-lg">{{ $t( 'Richiesto il') }}  {{item.upDate}} </div>

                    <div class="description ml-lg " > {{ $t( 'Richiesta di cashback') }}</div>
                    <div class="visible-xs request-date ml-lg mb-sm">{{ $t( 'Richiesto il') }}  {{item.upDate}} </div>
                    <div class="required-points ml-lg ">
                        <display-value prefix="€" type="money" :value="item.value"  :label="$t('Cashback richiesto')"  class="value"   />
                    </div>
                </div>

                <div slot="right-panel">
                    <action-button
                            @click.native= "toggleSendCashback"
                            name="cashback"
                            caption="Invia cashback"
                            image="images/cashback.svg"
                            :caret-up="showSendCashback" />
                </div>
            </be-actions-component>

        </div>


        <div class="row p0 m0   detail" v-if="showSendCashback">
            <send-cashback :item="item" />
        </div>

    </div>
</template>

<script>
    import DisplayValue from '../../../../../assets/components/DisplayValue'
    import ToggleLabel from '../../../../../../assets/components/ToggleLabel'
    import BeActionsComponent from '../../../../../assets/components/BeActionsComponent'
    import ActionButton from '../../../../../assets/components/BeActionButton'
    import SendCashback from './SendCashback'
    import {mapActions} from 'vuex'

    export default{
        data(){
            return {    showSendCashback:false }
        },
        props:['item'],
        components:{
            SendCashback,
            DisplayValue,
            ToggleLabel,
            BeActionsComponent,
            ActionButton
        },
        methods:{
            toggleSendCashback(){  this.showSendCashback= !this.showSendCashback;  }, 
            //...mapActions('prize',['sendPrize']),
            onSend(){
                //this.sendPrize(this.item);
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../../portal_user/pages/users-list/vars';
    @import '../vars';

    .cashback-waiting-list-item{
        .main {
            color: white;
            //generic marker for elements with same css
            .element {
                height: $widget-height;
            }
            // panel left and center section
            .body {
                background: $bg-cashback;

                .pull-request-date {
                    color:black;
                    text-align:right;
                    font-size: 12px;
                }
                .request-date{
                    color:black;
                    text-align:left ;
                    font-size: 12px;
                }
                .description {
                    font-size: 13px;
                    font-weight: bold;
                    margin-top: 10px;
                    margin-bottom: 8px;
                }
                .required-points {
                    .display-value {
                        width: 180px;
                        .value {
                            background: $bg-cashback-dark;
                            color: white;
                        }
                        .label {
                            font-weight: normal
                        }
                    }
                    margin-bottom: 12px;
                }
                .detail-switch {
                    font-size: 12px;
                    color: black;
                    font-style: italic;
                }
            }
            // panel right section
            .icon {
                background: $bg-cashback;
                .caret-container {
                    position: relative;
                    top: -3px;
                }
                img {
                    width: $icon-width;
                    margin-top: 12px;
                }
                .cashback-action {
                    width: $square-width;
                    height: $widget-height;
                    background: $bg-cashback-dark;
                    float: right;
                    text-align:center;
                }
            }
            // left side image
            .item-image-container {
                img {
                    width: $square-width;
                }
            }
        }
        .detail{
            text-align:left;
            min-height:$detail-height;
        }
    }
</style>