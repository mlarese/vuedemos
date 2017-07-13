<template>
    <div class="prizes-waiting-list-item-send-prize">
        <div class="panel m0">
            <div class="panel-body">
                <div class="col-md-3 col-lg-3 pan pan1  pr0">
                    <div class="panel-item h4 panel-title bold">{{ $t( 'Indirizzo di spedizione') }}</div>
                    <div class="panel-item h4 address"> {{  shipping.fullname }} {{  shipping.surname }} </div>
                    <div class="panel-item h4 address"> {{  shipping.address }} </div>
                    <div class="panel-item h4 address"> {{shipping.zipcode}} {{  shipping.city }} </div>
                    <div class="panel-item h4 address mb-lg"> {{  shipping.country }} </div>

                    <div class="address mt-lg">&nbsp;</div>
                    <div class="panel-item h4 panel-title bold">{{ $t( 'telephone') }}</div>
                    <div class="panel-item h4 address  "> {{  shipping.telephone}} </div>
                </div>

                <div class="col-md-3 col-lg-3 pan pan2">
                    <div class="panel-item h4 panel-title bold">{{ $t( 'Note') }}</div>
                    <div class="panel-item h4 address"> {{  item.note }} </div>
                </div>
                <div class="col-md-3 col-lg-3 pan pan3  pr0">
                    <change-state :item="item"/>
                </div>
                <div class="col-md-3 col-lg-3 pan pan4">
                     <send-refuse-message :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ChangeState from './ChangeState'
    import SendRefuseMessage from './SendRefuseMessage'

    export default{
        components:{ ChangeState , SendRefuseMessage},
        props:['item'],
        computed:{
            shipping(){
                return this.item.shippingdata;
            },
            prize(){
                return this.item.prize;
            }
        },
    }
</script>
<style lang="scss">
    @import '../../../../be/app';
    @import '../../../../portal_user/pages/users-list/vars';
    @import '../vars';

    .prizes-waiting-list-item-send-prize{
        .v-separator{height: 100%;width:1px;  float:right;border-color: #dbdfe1 }
        .panel{border:0}
        .panel-item{  }

        .panel-body{
            border:2px solid $bg-gift-dark;
            padding :0;
            .pan{
                height:$detail-height;
                .panel-title{ font-size:12px; }
                .address{
                    color:$main-color;
                    font-weight: normal;
                    margin:0px 0px 6px 0px;
                    font-size:12px;
                }
            }
            .pan3,.pan4{background: #E4EAED}
        }

    }
</style>