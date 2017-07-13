<template>
    <div class="search-input">
        <form class="form-inline">
            <div class="form-group mb-sm">
                <label class="control-label">{{$t('search')}}</label>
                <div class="input-group">
                    <input
                        type="text" class="form-control input-sm"
                        v-model="operations.search"
                        :placeholder="$t( 'Nome Struttura o N. Prenotazione')" />

                    <div class="input-group-addon bg-primary pl-md pr-md text-center">
                        <i class="fa fa-search"></i>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex'

    export default{
        components: {},
        props: [],
        computed: {
            ...mapState('reservation', ['operations'])
        }
    }
</script>
<style lang="scss">
    .search-input{
        .control-label{
            font-size:13px;
            margin-right:4px;
        }
    }
</style>