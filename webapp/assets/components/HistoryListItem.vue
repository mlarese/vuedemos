<template>
    <div class="row record history-list-item">
        <div class="col-xs-12 col-md-5 col-lg-4" style="white-space: nowrap">
            <p class="bold description" v-if="descriptions.d">{{descriptions.d}}</p>
        </div>
        <div class="col-xs-12 col-md-4 col-lg-3 text-right">
            <p>
                <span class="text-gray-medium date-description">{{descriptions.lblDate}}</span>
                <span class="res_date bold date">{{record.updateOn   }}</span>
            </p>
        </div>
        <div class="col-xs-12 col-md-3 col-lg-5 text-right">
            <component  :is="valueComponent" :value="descriptions" :statusClass="statusClass"/>
        </div>
    </div>
</template>

<script>
    import allFilters from '../../../assets/filters/index'
    import Vue from 'vue'
    import {getDescriptions,getValueField} from '../../app/guest-be/helper'

    export default{
        filters:{
            ...allFilters
        },
        components:{
            "default":{
                template:'<p class="html-value bold value" :class="statusClass">{{value.pre}} {{value.sign}}{{value.pd}}</p>',
                props:['value','statusClass'],
            }
        },
        props:{
            record:{default:()=>{}},
            type:{default:'fidelity'},
            valueComponent:{default:'default'},
        },
        computed:{
            descriptions(){
                const r = this.record,  $t = this.$t,valueField=getValueField(this.type);
                return getDescriptions($t,this.type,r.status,r[valueField],r);
            } ,
            statusClass(){
              return 'status-'+this.record.status;
            }
        },
    }
</script>
<style lang="scss">
    $main-color: #2E70A4 ;

    $negative-points-color:#ac2925;
    $negative-points-bk:#E3CB96;

    $positive-points-bk:#C3E5B8;


    .history-list-item {
        font-size:12px !important;
        .date{
            font-weight: bold;
        }
        .display-value{
            max-width:220px;
            position:relative;
            right:10px;
            top:-5px;
            .description-text{color: $main-color !important;  }
            .value{max-width:20px;font-weight: bold;}
        }

        .html-value{
            .status-c {
                position: relative;
                left: +6px;
            }
        }
        .status-c {
            color: #707070;
            .value {
                background: #D5D5D5;
            }
        }
        .status-e {
            color: green;
            .value {
                background: $positive-points-bk;
                color: $main-color
            }
        }
        .status-u {
            color: $negative-points-color;
            .value {
                background: $negative-points-bk;
                color: $main-color
            }
        }
        .status-t {
            color: black;
            .value {
                background: black;
                color: $main-color
            }
        }
        .status-d {
            color: darkgray;
            .value {
                background: silver;
                color: $main-color
            }
        }
        .status-r {
            color: $negative-points-color;
            .value {
                background: $negative-points-bk;
                color: $main-color
            }
        }
    }
</style>