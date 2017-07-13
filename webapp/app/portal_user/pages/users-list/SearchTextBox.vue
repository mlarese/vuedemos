<template>
    <div class="form-group mb-sm search-text-box">
        <label class="sr-only"  >Amount (in dollars)</label>
        <div class="input-group">

            <v-select
                    class="form-control input-sm"
                    :value="text"
                    label="userName"
                    :options="userOptions"
                    :on-search="loadOptions"
                    :no-drop-indicator="true"
                    :noOptionsText="$t('No matching names')"
                    :on-change="onSelectUserChange"
            />
            <div class="input-group-addon v-select-addon bg-primary pl-md pr-md text-center">
                <i class="fa fa-search "></i>
            </div>
        </div>
    </div>
</template>
<script>
    import _debounce from 'lodash/debounce'
    import {mapState,mapActions} from 'vuex'
    import vSelect from "../../../../../assets/components/v-select"

    export default{
        data(){
            return {  text:'',   }
        },
        computed:{
            ...mapState('portal_user',['userOptions'])
        },
        components:{vSelect},

        created(){
            this.text = this.$store.state.portal_user.search;
            this.loadOptions= _debounce((search, loading) => {
                loading(true);
                this.loadUsersOptions(search).then(res=>{  loading(false);   })
            }, 500)
        },
        methods:{
            ...mapActions("portal_user",['loadUsersOptions']),
            onSelectUserChange(val){
                if(!val){
                    this.options=[];
                    this.$store.commit('portal_user/SET_SEARCH',val,{root:true});
                }else{
                    this.$store.commit('portal_user/SET_SEARCH',val,{root:true});
                }
            }
        }
    }
</script>
<style lang="scss">

    $v-select-input-height: 27px;
    $v-select-b-radius: 2px 0 0  2px;

    .search-text-box {
        .v-select .dropdown-toggle {
            border: 0 !important;

            border-radius: $v-select-b-radius !important;
            input.form-control {
                height: 27px;
            }
        }


        .v-select.form-control.input-sm {
            padding: 0 !important;
            height: auto;
            border-right: 0;
            border-radius: $v-select-b-radius !important;
        }

        .v-select input[type=search], .v-select input[type=search]:focus {
            //height:$v-select-input-height !important;
        }

        .v-select-addon {
            height: ($v-select-input-height + 2) !important;
        }

        .v-select .selected-tag {
            padding: 0 0 0 15px !important;
            color: #333 !important;
            background-color: transparent !important;
            border: 0 !important;
            border-radius: 0px !important;
        }
    }
</style>