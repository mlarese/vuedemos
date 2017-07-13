<template>
    <div :class="domain+'-recap'" class="recap">
        <div class="h5 title"> {{ $t( 'Status attuale') }} </div>
        <div class="panel panel-default">
            <div class="panel-body">

                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                        <display-value
                                class="earned"
                                :prefix="prefix"
                                :label="$t(earnedLbl)"
                                :type="type"
                                :value="earned"/>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                        <display-value
                                class="used"
                                :prefix="prefix"
                                :label="$t(usedLbl)"
                                :type="type"
                                :value="earned"/>
                    </div>


                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                        <display-value
                                class="waiting"
                                :prefix="prefix"
                                :label="$t(waitingLbl)+'*'"
                                :type="type"
                                :value="earned"/>
                    </div>
                </div>

                <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4 text-left mt-lg">
                        <display-value
                                class="total"
                                :prefix="prefix"
                                :label="$t(totalLbl)"
                                :type="type"
                                :value="earned"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import {mapActions, mapState, mapGetters} from 'vuex'
    import DisplayValue from '../../../assets/components/DisplayValue'

    export default{
        components:{ DisplayValue },
        props:['waiting','earned','used','total','type','domain','prefix'],
        computed:{
            waitingLbl(){ return this.domain + ' total waiting'; },
            earnedLbl(){ return this.domain + ' total earned'; },
            usedLbl(){ return this.domain + ' total used'; },
            totalLbl(){ return this.domain + ' total'; }
        }
    }
</script>
<style lang="scss">
    @import "../../../app/be/app";

    $earned-color: #C4E5B8;
    $used-color: #E2CB95;
    $default-color: #CEDBE3;

    $total-font-size:16px;
    $border-radius:4px;

    .recap{
        .title{ @extend .default-section-title;}
        .panel-default{ background: #E5EAEE}

        .display-value{
            .value{color:$main-color;font-weight:bold}
        }

        .display-value.earned{
            .value{background:$earned-color;  }
            border:1px solid $earned-color;
            border-radius: $border-radius;
        }
        .display-value.used{
            .value{background:$used-color;}
            border:1px solid $used-color;
            border-radius: $border-radius;
        }
        .display-value.waiting{
            .value{background:$default-color;}
            border:1px solid $default-color;
            border-radius: $border-radius;
        }

        .display-value.total{
            .value{font-size:$total-font-size;background: $default-color}
            .label{font-size:$total-font-size;}
            border:1px solid $default-color;
            border-radius: $border-radius;
        }

    }
</style>