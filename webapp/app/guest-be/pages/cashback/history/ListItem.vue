<template>

    <div class="cashback-history-list-item">
        <history-list-item
            domain="cashback"
            :description="description"
            :detailComponent="detailComponent"
            :item="item"
            :date1="item.crDate"
            date1Label="Richiesto il"
            :date2="item.upDate"
            date2Label="Presa in carico il"
        />

    </div>

</template>

<script>
    import ListItemDetail from './ListItemDetail'
    import HistoryListItem from '../../HistoryListItem'
    import ToggleLabel from '../../../../../../assets/components/ToggleLabel'
    import {getDescriptions,getValueField,getFormattedValue} from '../../../helper'
    import allflt from '../../../../../../assets/filters'
    export default{
        props:['item'],
        components:{ HistoryListItem,  ToggleLabel ,ListItemDetail},
        computed:{
            description(){
                const d =   getDescriptions(this.$t,'cashback',this.item.status,this.item.value);
                return `<span class="state-${this.item.status}"> ${d.pd}  -  ${d.shortDescription}  </span>`;

            }
        },
        data(){
            return {
                showDetail:false,
                detailComponent:ListItemDetail
            }
        },
        methods:{
            toggleDetail(){   this.showDetail = ! this.showDetail; }
        },
    }
</script>
<style lang="scss">
   .cashback-history-list-item{
      .history-list-item{
          .name{
              .state-t{color: green}
              .state-d{color: red}
              .state-r{color: red}
          }

      }

   }
</style>