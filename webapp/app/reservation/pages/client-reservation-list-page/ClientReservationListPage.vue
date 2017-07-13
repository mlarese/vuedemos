<template>
    <div class="absfg">
        <div class="page reservations-container" >
            <div class="flex__between title_wrap">
                <h3  class=" title">{{$t("your reservations")}}</h3>
            </div>


            <modal :title="labels['delete request'] || 'Richiesta di cancellazione.' " v-model="showConfirmDelete" effect="fade">

                <div  class="mb" v-if="!deleteNotAllowed && !deleteError && !deleteSuccess">
                    <b> {{ $t('Confermi la richiesta di cancellazione della prenotazione') }} </b>
                </div>

                <div>
                   <div>
                       <div>
                           <div>
                               {{labels.reservationNumber || 'Prenotazione num.'}}  <b>{{reservationOnDelete.number}}</b>
                               <span>
                                   {{labels.made}} <span class="res_date bold">{{reservationOnDelete.opendate | DMY }}</span>&nbsp;&nbsp;
                               </span>
                           </div>
                           <span>{{labels.arrival || 'arrivo il ' }}</span>
                           <span class="res_from bold"  >{{reservationOnDelete.checkin | DMY }}</span>&nbsp;&nbsp;&nbsp;

                           <span class="form-group">{{labels.departure||'partenza il '}}</span>
                           <span   class="form-group res_to bold">{{reservationOnDelete.checkout | DMY }}</span>
                       </div>

                       <hr />

                       <div>
                           <div class="mb-sm"><b > {{ $t('Politiche di cancellazione') }} </b></div>
                           <div v-html="reservationOnDelete.cancellationPolicy"> </div>
                       </div>

                       <div class="mt">
                            <p v-if="deleteError" class="alert bg-danger-lighter">
                                {{$t(deleteError)}}
                            </p>

                           <p v-if="deleteNotAllowed" class="alert bg-warning-lighter">
                               {{$t(deleteNotAllowed)}}
                           </p>

                           <p v-if="deleteSuccess" class="alert bg-success-lighter">
                               {{$t(deleteSuccess)}}
                           </p>
                       </div>

                   </div>

                </div>
                <div slot="modal-footer" class="modal-footer">
                    <button type="button" class="btn btn-default uppercase" @click="resetDeleteMode">{{labels.close||'Chiudi' }}</button>
                    <button
                            v-if="!deleteNotAllowed && !deleteError && !deleteSuccess"
                            type="button"
                            class="btn btn-primary uppercase"
                            @click="onDeleteReservationConfirm ">
                        {{ $t('Conferma') }}
                    </button>
                </div>
            </modal>

            <div class="row thebox">

                <div v-if="actualReservations.length==0" class="alert bg-warning-light">
                    {{ $t( 'Non ci sono prenotazioni') }}
                </div>

                <div class="col-xs-12" v-for="(reservation,index) in actualReservations">
                    <div class="distance-between-reservations" v-if="index>0"></div>
                    <client-reservation-list-item
                        type="actual"
                        :reservation-vm="reservation"
                        :canEdit="true"
                        @change-status="changeStatus"
                        @delete-reservation="onDeleteReservation"
                        @check-reservation="onCheckReservation"
                        @update-reservation="onUpdateReservation"
                    ></client-reservation-list-item>
                </div>

                <p v-if="oldCount>0">&nbsp;</p>
                <p v-if="oldCount>0">{{ $t('archivedReservations')}}</p>

                <div class="col-xs-12" v-for="reservation in oldReservations">
                    <client-reservation-list-item
                            type="old"
                            :reservation-vm="reservation"
                            :canEdit="false"
                    ></client-reservation-list-item>
                    <div class="distance-between-reservations"></div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import ClientReservationListItem from '../../components/client-reservation-list-item/ClientReservationListItem'
    import _filter from 'lodash/filter'
    import _sortBy from 'lodash/sortBy'
    import {mapState,mapActions,mapGetters} from 'vuex'
    import {validateRMngStatusTransiction} from '../../pages/client-reservation-list-page/flowvalidator'
    import Modal from 'vue-strap/src/Modal'
    import allFilters from '../../../../../assets/filters'
    import _has from 'lodash/has'
    import Vue from 'vue'

    let store = Vue.$ioc.resolve("store");

    export default {
        data(){
            return {
                showConfirmDelete:false,
                reservationOnDelete:{},
                deleteSuccess:null,
                deleteNotAllowed:null,
                deleteError:null
            }
        },
        filters:{
            ...allFilters
        },
        methods:{
            ...mapActions( 'reservation',  [
                'loadGuestReservations',
                'checkReservation',
                'modifyReservation',
                'loadLabels',
                'deleteReservation',
                'updateReservation'
            ] ) ,
            changeStatus(newStatus,oldStatus,reservationVm){
                if(  validateRMngStatusTransiction(oldStatus,newStatus) )
                    reservationVm.status = newStatus;;
            },
            resetDeleteMode(){
                this.reservationOnDelete = {};
                this.showConfirmDelete = false;
                this.deleteNotAllowed=null;
                this.deleteError=null;
                this.deleteSuccess=null;
            },
            onDeleteReservation(reservationVm){
                this.reservationOnDelete = reservationVm.reservation;
                this.showConfirmDelete = true;
            },
            onDeleteReservationConfirm(){
                let reservationId = this.reservationOnDelete.reservationId;

                return this.deleteReservation({reservationId})
                    .then(res=>{
                        if(_has(res,'data.success')){
                            if(res.data.success){
                                this.loadGuestReservations();
                                this.deleteSuccess = 'Richiesta di cancellazione effettuata';
                            }else{
                                this.deleteNotAllowed =  'Non è possibile eliminare questa prenotazione';
                            }
                        }
                    }).catch(err=>{
                        this.deleteNotAllowed =  'Non è possibile eliminare questa prenotazione';
                    })
                    ;
            },
            onCheckReservation(reservationVm,checkin,checkout){
                return this.checkReservation({reservationVm,checkin,checkout})
                    .then(res=>{

                    });
            },
            onUpdateReservation(reservationVm ){
                return this.modifyReservation(reservationVm)
                    .then(res=>{

                    });
            }
        },
        beforeRouteEnter (to, from, next) {
            const goOn = res=> next();
            store.dispatch('reservation/loadGuestReservations', null ,{root:1})
                .then(goOn)
                .catch(goOn)
        },
        components:{
            ClientReservationListItem,
            Modal
        },
        computed:{
            ...mapState('reservation',{
                reservationsList:'guestReservations',
                sortBy:'operations.sortBy'
            }),
            ...mapGetters('reservation',['actualReservations' , 'oldReservations','actualCount','oldCount']),
            ...mapState(['labels'])

        }
    }
</script>
<style scoped>
    .distance-between-reservations{
        margin-bottom:20px;
    }
    .reservations-container .row.thebox{
        min-height:500px;
    }
</style>
