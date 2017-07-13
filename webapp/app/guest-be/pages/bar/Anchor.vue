<template>
    <span @click="onClick" :class="clazz+'-s'"  class="anchor">
        <span :class="{'current-anchor-item':isCurrent}">
            <a  v-scroll-to="scrollTo" :class="clazz+'-a'" >{{$t(label)}}</a>
        </span>
    </span>
</template>
<script>
    import {mapActions,mapState,mapGetters} from 'vuex'

    export default{
        methods:{
            ...mapActions('portal_user',['changeCurrentUserAnchor']),
            onClick( ){
                this.changeCurrentUserAnchor( this.id);
            }
        },

        props:['label','clazz','scrollTo','id'],
        computed:{
            ...mapState('portal_user',['currentUserAnchor']),
            isCurrent(){
                return ('#'+this.currentUserAnchor===this.scrollTo.el);
            }
        }
    }
</script>

<style lang="scss">
   .anchor .current-anchor-item{
       font-weight:bold;
   }
</style>