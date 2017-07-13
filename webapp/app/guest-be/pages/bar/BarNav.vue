<template>
    <div class="be-guest-bar-nav">
        <template v-for="(item, index) in items">
            <anchor :id="item.id"  :scroll-to="item.scrollTo"   clazz="be-guest" :label="item.label" :key="index" />
        </template>
    </div>
</template>

<script>
    import Anchor from './Anchor'
    import {mapActions,mapState,mapGetters} from 'vuex'

    export default{
        data(){
            return {
                items:[
                    {id:'a-overview',scrollTo:{offset:-194,el:'#a-overview'},label:'Panoramica' }  ,
                    {id:'a-userdata',scrollTo:{offset:-194,el:'#a-userdata'},label:'Anagrafica'}  ,
                    {id:'a-reservations',scrollTo:{offset:-194,el:'#a-reservations'},label:'Prenotazioni'}  ,
                    {id:'a-fidelity',scrollTo:{offset:-194,el:'#a-fidelity'},label:'Punti'}  ,
                    {id:'a-prizes',scrollTo:{offset:-194,el:'#a-prizes'},label:'Premi'}  ,
                    {id:'a-cashback',scrollTo:{offset:-194,el:'#a-cashback'},label:'Cashback'}  ,
                ]
            }
        },
        components:{Anchor}
    }
</script>
<style lang="scss">
   .be-guest-bar-nav{
        .be-guest-a{
            text-transform: uppercase;
            font-size: 12px;
        }
       .be-guest-s{
           margin-left:18px;
       }
   }
</style>