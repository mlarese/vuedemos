<template>

    <div>
        <list-item
            domain="prizes"
            :description="item.prize.name"
            :detailComponent="detailComponent"
            :item="item"
            :date1="item.requestDate"
            date1Label="Richiesto il"
            :date2="item.sentDate"
            date2Label="Inviato il"
        />
    </div>
 
</template>

<script>
    import ListItemDetail from './ListItemDetail'
    import ListItem from '../../HistoryListItem'
    import ToggleLabel from '../../../../../../assets/components/ToggleLabel'

    export default{
        props:['item'],
        components:{ ListItem,  ToggleLabel ,ListItemDetail},

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

</style>