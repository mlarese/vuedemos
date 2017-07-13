<template>
    <div class="display-value input-group wd-wide" >
        <div class="form-control input-xs label description-text" type="text">{{$t(label)}}</div>
        <span v-if="type=='number'" class="input-group-addon input-xs valuta-width value">{{prefix}} {{sign}}{{value | integer}} {{suffix}}</span>
        <span v-if="type=='money'" class="input-group-addon input-xs valuta-width value">{{prefix}} {{sign}}{{value | money}} {{suffix}}</span>
    </div>
</template>
<script>
    import allFilters from '../../../assets/filters'


    export default{
        filters: {...allFilters},
        props: {
            'label':{default:''},
            'value':{default:''},
            'prefix':{default:''},
            'suffix':{default:''},
            'sign':{default:''},
            'type':{default:'number'},
        }
    }
</script>

<style lang="scss">
    $border-radius:4px;

    .display-value {
        .label {
            position: static !important;
            border-radius: $border-radius;
        }
        .value{

            border-radius: 0 $border-radius $border-radius 0  ;
        }
    }
</style>