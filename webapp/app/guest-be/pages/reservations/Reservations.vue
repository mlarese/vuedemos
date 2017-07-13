<template>
    <div class="defaults reservations" id="a-reservations">

        <section-title title="Prenotazioni"   slot-cols="7" >
            <search-input slot="tools"   />
        </section-title>

        <template v-for="reservation in actualVisibleReservations">
            <item :reservation="reservation" type="actual" />
        </template>

        <div class="h5 reservation-history text-left" v-if="oldVisibleReservations.length>0" >
            {{ $t( 'Storico prenotazioni') }}
        </div>

        <template v-for="reservation in oldVisibleReservations">
            <item :reservation="reservation" type="old" />
        </template>

        <div class="alert bg-warning-light" v-if="oldVisibleReservations.length===0 && actualVisibleReservations.length===0">
            {{ $t( 'Nessuna prenotazione trovata') }}
        </div>
    </div>
</template>

<script>
    import Base from "../Base"
    import SectionTitle from "../SectionTitle"
    import Item from "./Item"
    import SearchInput from "./SearchInput"
    import {mapActions, mapState, mapGetters} from 'vuex'
    import _filter from 'lodash/filter'

    export default{
        extends:Base,
        components:{SectionTitle,SearchInput,Item},
        computed: {
            ...mapState('reservation',['operations']),
            ...mapGetters('reservation', ['actualReservations','oldReservations','actualCount','oldCount']),
            hasFilter(){
                return (this.operations.search!=null && this.operations.search!=='');
            },
            filter(){
                if(!this.operations.search)
                    return null;
                return  this.operations.search.toLowerCase()
            },
            actualVisibleReservations(){
                if(!this.hasFilter)
                    return this.actualReservations;

                return   _filter(
                    this.actualReservations,
                    o=>{
                        return  o.number.toLowerCase().includes(this.filter) ||
                                o.structure_name.toLowerCase().includes(this.filter)
                    }
                );
            },
            oldVisibleReservations(){
                if(!this.hasFilter)
                    return this.oldReservations;

                return   _filter(
                    this.oldReservations,
                    o=>{
                        return  o.number.toLowerCase().includes(this.filter) ||
                            o.structure_name.toLowerCase().includes(this.filter)
                    }
                );
            },
        }
    }
</script>
<style lang="scss">
    @import "../../../be/app";
    .reservations{
        .reservation-history{
            color:$main-color;
        }
        .search-input{
            input {font-size:11px;width:100%;}
        }
    }
</style>