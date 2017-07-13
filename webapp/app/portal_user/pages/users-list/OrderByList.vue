<template>
    <div class="form-group mb-sm order-by-list">

        <div class="input-group">
            <div class="input-group-addon bg-white pl-md pr-md text-center">
                <i class="fa fa-sort-amount-desc  "></i>
            </div>

            <div class="dropdown" >
                <button
                        class=" wd-wide btn btn-default btn-flt dropdown-toggle text-left"
                        type="button"
                        id="userListSortBy"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"><span class="caret pull-right"  ></span>{{ $t(sortBy) }}</button>


                <ul class="dropdown-menu wd-wide pd-sm" aria-labelledby="userListSortBy">
                    <li v-for="criteria in ['default','user-name-a-z','user-name-z-a'] " v-if="criteria!=sortBy"  >
                        <a @click="setOrderBy(criteria)">{{$t(  criteria )}} </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        data(){
            return {
                sortBy:'default'
            }
        },
        created(){
            this.sortBy = this.$store.state.portal_user.order;
        },
        methods:{
            setOrderBy(criteria){
                this.sortBy = criteria;
                this.$store.commit('portal_user/SET_ORDER',criteria,{root:true});
            }
        }
    }
</script>
<style>

</style>