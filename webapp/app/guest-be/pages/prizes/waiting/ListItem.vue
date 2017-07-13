<template>
    <div class="prizes-waiting-list-item">

        <div class="row p0 m0 main">
            <be-actions-component :item="item" class="prizes-waiting-list-item">
                <div slot="left-panel">
                    <div class="item-image-container pull-left hidden-xs mr-sm" style="position:relative;top:-10px;">
                        <img :src="item.prize.image" :alt="item.prize.imageTitle">
                    </div>
                    <div>
                        <div class="hidden-xs pull-right pull-request-date mr-lg pr-lg">{{ $t( 'Richiesto il') }}  {{item.requestDate}} </div>
                        <div class="description ml-sm " v-html="item.prize.name"> </div>
                        <div class="visible-xs request-date ml-lg mb-sm">{{ $t( 'Richiesto il') }}  {{item.requestDate}} </div>

                        <div class="required-points ml-sm ">
                            <display-value :value="item.prize.requiredPoints"  :label="$t('Punti necessari')"  class="value"   />
                        </div>
                        <div class="detail-switch ml-sm "  >
                            <toggle-label @click.native="toggleDetail"  show-text="" hide-text="Nascondi la scheda premio" show-text="Visualizza la scheda premio" :show="showDetail"/>
                        </div>
                    </div>
                </div>

                <div slot="right-panel">
                    <action-button
                            @click.native= "toggleSendPrize"
                            name="gift"
                            caption="Invia il premio"
                            image="images/gifts.svg"
                            :caret-up="showSendPrize" />
                </div>
            </be-actions-component>

        </div>
        <div class="row p0 m0 b detail" v-if="showDetail">
            <list-item-detail :item="item"  />
        </div>

        <div class="row p0 m0   detail" v-if="showSendPrize">
            <send-prize :item="item"  />
        </div>
    </div>
</template>

<script>
    import DisplayValue from '../../../../../assets/components/DisplayValue'
    import ToggleLabel from '../../../../../../assets/components/ToggleLabel'
    import BeActionsComponent from '../../../../../assets/components/BeActionsComponent'
    import SendPrize from './SendPrize'
    import ListItemDetail from './ListItemDetail'
    import ActionButton from '../../../../../assets/components/BeActionButton'
    import {mapActions} from 'vuex'

    export default{
        data(){
            return {   showDetail:false, showSendPrize:false }
        },
        props:['item'],
        components:{
            ListItemDetail,
            DisplayValue,
            SendPrize ,
            ToggleLabel,
            BeActionsComponent,
            ActionButton
        },
        methods:{
            toggleSendPrize(){  this.showSendPrize= !this.showSendPrize;  },
            toggleDetail(){ this.showDetail = !this.showDetail;  },
            ...mapActions('prize',['sendPrize']),
            onSend(){
                this.sendPrize(this.item);
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../../portal_user/pages/users-list/vars';
    @import '../vars';

    .prizes-waiting-list-item{
        .main {
            color: white;
            //generic marker for elements with same css
            .element {
                height: $widget-height;
            }
            // panel left and center section
            .body {
                background: $bg-gift;
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
                            background: $bg-gift-dark;
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
                background: $bg-gift;
                .caret-container {
                    position: relative;
                    top: -3px;
                }
                img {
                    width: $icon-width;
                    margin-top: 12px;
                }
                .gift-action {
                    width: $square-width;
                    height: $widget-height;
                    background: $bg-gift-dark;
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