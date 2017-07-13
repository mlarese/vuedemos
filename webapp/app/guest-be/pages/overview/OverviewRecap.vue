<template>
    <div class="overview-recap">
        <div v-if="guest" class="text-left">
            <div class="h2 text-left">{{guest.userName}} {{guest.userSurname}}</div>

            <div class="overview-recap-reservations mb-sm">
                {{$t("reservation made",{count:guest.reservationCount},guest.reservationCount)}}
                 -
                <b>{{$t("last booking made") }} {{guest.lastBookingDate  }}</b>
            </div>

            <prize-cashback :guest="guest" />

        </div>
    </div>
</template>

<script>
    import allFilters from '../../../../../assets/filters'
    import PrizeCashback from './OverviewPrizeCashback'
    export default{
        filters:{...allFilters},
        components:{
            PrizeCashback
        },
        props:['guest']
    }
</script>
<style lang="scss">
    .overview-recap-reservations{
        font-size:12px;
        color:#437EAE;
    }
</style>