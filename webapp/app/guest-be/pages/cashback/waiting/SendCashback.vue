<template>
    <div class="cashback-waiting-send-cashback">
        <div class="panel m0">
            <div class="panel-body">
                <div class="col-md-4 col-lg-4 pan pan1  pr0">
                    <div class="panel-item h4 panel-title bold">{{ $t( 'Intestatario conto corrente') }}</div>
                    <div class="panel-item h4 address mb-lg" > {{  item.name }} {{  item.surname }} </div>

                    <div class="address mt-lg">&nbsp;</div>
                    <div class="panel-item h4 panel-title bold mt-lg">{{ $t( 'Codice Iban') }}</div>
                    <div class="panel-item h4 address" > {{  item.iban }}  </div>
                </div>
                <div class="col-md-4 col-lg-4 pan pan2  pr0">
                    <div class="panel-item h4 panel-title bold">{{ $t( 'Note') }}</div>
                    <div class="panel-item h4 address"> {{  item.note }} </div>
                </div>
                <div class="col-md-4 col-lg-4 pan pan3  pr0">
                    <change-state :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ChangeState from './ChangeState'
    export default{
        components:{ChangeState},
        props: ['item']
    }
</script>
<style lang="scss">
    @import '../../../../be/app';
    @import '../../../../portal_user/pages/users-list/vars';
    @import '../vars';

    .cashback-waiting-send-cashback{
        .panel{border:0}
        .v-separator{height: 100%;width:1px;  float:right;border-color: #dbdfe1 }
        .panel-item{  }
        .panel-body{
            border:2px solid $bg-cashback-dark;
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
            .pan3 {background: #E4EAED}
        }

    }
</style>