<template>
    <!--------------------------------------------------------------------------------------
            Box Detail visible on isDetailOpened
    ---------------------------------------------------------------------------------------->
    <div class="col-xs-12 reservation-detail-container client-reservation-list-item-detail" v-if="isDetailOpened">
        <div class="detail-panel">
            <div class="bordered reservation-detail">
                <div class="detail-body" >
                    <div v-for="(item,index) in detail " :key="index" class="row details">
                        <div class="col-xs-12 col-sm-6 col-lg-6">
                              <b>{{item.name}}</b>
                        </div>
                        <div class="col-xs-12 col-sm-3 col-lg-2">
                           {{labels.board}} <b>{{item.board}}</b>
                        </div>
                        <div class="col-xs-12 col-sm-3 col-lg-4">
                            {{ $t('adults') }} <b>{{item.guests.adults}}</b>
                             -
                            {{ $t('children') }} <b>{{item.guests.children.count}}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        methods:{
            lblAdults(){  return this.$parent.lblAdults;  },
            lblChildren(){  return this.$parent.lblChildren;  }
        },
        computed: {
            detail(){  return this.$parent.detail;  },
            labels(){  return this.$parent.labels;  },
            isDetailOpened(){  return this.$parent.isDetailOpened;  },
            reservation(){  return this.$parent.reservation;  }
        }
    }
</script>
<style scoped>
    .detail-body{padding:10px 10px 10px 15px;}
    .details{ font-size:12px}
</style>