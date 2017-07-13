<script>
    import {mapActions,mapState,mapGetters} from 'vuex'

    export default{
        computed:{
            ...mapState('guest',['currentGuest'])
        }
    }
</script>