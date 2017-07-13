<template>
    <div class="action-combo input-group mb-lg mt-lg">
        <div class="action-combo-image input-group-addon  pl-md pr-md text-center b0"  >
            <img :src="image" width="16" alt="">
        </div>

        <div class="dropdown" >
            <button
                    class=" wd-wide btn btn-default btn-flt dropdown-toggle text-left"
                    type="button"
                    :id="id"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"><span class="caret pull-right"  ></span>{{  value.label   }}</button>


            <ul class="dropdown-menu wd-wide pd-sm" :aria-labelledby="id">
                <template v-for="criteria in options ">
                    <li  v-if="criteria.value!=value.value"  >
                        <a @click="changeOption(criteria)">{{   criteria.label  }} </a>
                    </li>
                </template>

            </ul>
        </div>
    </div>
</template>
<script>
    let curIndex = 0;
    export default{
        created(){
            curIndex++; 
        },
        computed:{ 
            id(){
                return 'action-combo-dropdown-menu-'+curIndex;
            }
        },
        model: { prop: 'value', event: 'change' },
        props: ['image','options','value'],
        methods:{
            changeOption(newOption){
                this.$emit('change',newOption)
            },
        },
    }
</script>
<style lang="scss">
    .action-combo{
        border-radius: 4px 0px 0px 4px !important;
        .dropdown {
            button {
                min-height: 28px;
                border-radius: 0px 4px 4px 0px
            }
        }
    }
</style>