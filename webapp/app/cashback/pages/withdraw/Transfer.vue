<template>
    <div>
        <p @click="toggleVisibility"  class="mb-0 pointer bold"><span>{{$t('Visualizza la cronologia dei transfer')}}</span> <span class=""ml-lg>&gt;</span></p>

        <div class="row whitebox" v-if="historyVisible">
            <history-list-item  v-for="(his,index) in transferList" :key="index" :record="his" type="cashback"/>
        </div>
    </div>
</template>
<script>
    import HistoryListItem from '../../../../assets/components/HistoryListItem'
    import Base from './Base'

    export default{
        extends:Base,
        data(){
            return {
                historyVisible:false
            }
        },
        components:{ HistoryListItem },
        methods:{
            toggleVisibility(){
                this.historyVisible=!this.historyVisible;
            }
        }
    }
</script>

<style>
    .pointer{
        cursor: pointer;
    }
</style>

