<template>
    <div class="be-guest ">
        <div class="be-guest-container" >

            <div class="panel panel-default be-guest-panel">
                <div class="panel-body">
                    <portal to="underTitle">
                        <bar class="mb-0 mt-lg" />
                    </portal>
                    <overview class="mt-lg" />
                    <guest-data />
                    <reservations />
                    <fidelity />
                    <prizes />
                    <cashback />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Base from "./Base"
    import Cashback from "./cashback/Cashback"
    import Fidelity from "./fidelity/Fidelity"
    import Overview from "./overview/Overview"
    import Prizes from "./prizes/Prizes"
    import Reservations from "./reservations/Reservations"
    import GuestData from "./guestdata/GuestData"
    import Bar from "./bar/Bar"
    import Vue from 'vue'

    let store = Vue.$ioc.resolve("store");
    export default{
        beforeRouteEnter (to, from, next) {
            const calls = [
                store.dispatch('reservation/loadGuestReservations',{guestId:0,applyExtend:false},{root:true}),
                store.dispatch('prize/loadUserPrizes', 0 ,{root:1}),
                store.dispatch('cashback/loadRequests', 0 ,{root:1}),
            ];
            const goOn = res=> next();

            store.commit('SET_MULTI_LOADING',true,{root:1});
            Promise.all(calls)
                .then(goOn)
                .catch(goOn)
                .then(()=>{ store.commit('SET_MULTI_LOADING',false,{root:1});  }) ;
        },
        extends:Base,
        components:{
            Cashback,
            Fidelity,
            Overview,
            Prizes,
            Reservations,
            GuestData,
            Bar,
        }
    }
</script>

<style lang="scss">
    .be-guest-container{
        .be-guest-panel{
            margin-top: 60px;
            padding:0 15px;
        }
        .defaults{
            min-height: 301px;
            //border:1px solid silver
        }
    }
    //@import '../../../assets/css/absfg.css';
</style>

<style>

</style>