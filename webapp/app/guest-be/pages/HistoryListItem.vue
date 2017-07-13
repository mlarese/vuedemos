<template>
    <div :class="domain+'-history-list-item'" class="history-list-item">
        <div class="panel text-left panel-default ">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-7 name description" v-html="description"></div>
                    <div class="col-md-5" >
                        <span class="item-label">{{ $t( date1Label ) }}</span> <span class="value  mr-lg">{{date1}}</span>
                        <span class="item-label">{{ $t( date2Label ) }}</span>   <span class="value">{{ date2 }}</span>
                    </div>
                </div>

                <div class="row  mt-lg">
                    <div class="col-xs-12">
                        <toggle-label @click.native="toggleDetail" :show="showDetail" />
                    </div>
                </div>

                <div class="row" v-if="showDetail">
                    <div class="col-xs-12">
                        <component :is="detailComponent" :item="item"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import ToggleLabel from '../../../../assets/components/ToggleLabel'

    export default{
        props:['domain','description','detailComponent','item','date1','date1Label','date2','date2Label'],
        components:{ ToggleLabel},
        data(){  return { showDetail:false }  },
        methods:{
            toggleDetail(){   this.showDetail = ! this.showDetail; }
        },
    }
</script>
<style lang="scss">
    .history-list-item{
        font-size: 12px;
        .value{font-weight: bold;}
        .name{font-weight: bold;}
        .toggle-label{
            .element{ font-style: italic;font-size: 11px; }
        }
    }
</style>