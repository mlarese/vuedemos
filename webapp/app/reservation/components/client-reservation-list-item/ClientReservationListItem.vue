<template>

    <div class="row whitebox client-reservation-list-item">
        <reservation-header class="col-xs-12"></reservation-header>
        <check-in-out-container class="col-xs-12"></check-in-out-container>

        <reservation-total-container class=" col-xs-12 " ></reservation-total-container>

        <div class="col-xs-12">
            <div class="alert alert-danger text-center" v-if="isCancelStatusWaiting">
                {{ $t( 'Richiesta di cancellazione prenotazione in attesa di conferma') }}
            </div>
        </div>

        <div class="col-xs-12">
            <div class="alert alert-danger text-center" v-if="isCancelStatusExecuted">
                {{ $t( 'Prenotazione cancellata') }}
            </div>
        </div>

        <modify-request class="col-xs-12"></modify-request>

        <main-button-bar class="col-xs-12"></main-button-bar>
        <checked-error class="col-xs-12"></checked-error>
        <modify-success class="col-xs-12"></modify-success>
        <not-available-status class="col-xs-12"></not-available-status>

        <div class="date-edit-box-container col-xs-12"  >

            <div class="edit-mode-check-date plain"
                 v-if="
                    isEditingStatus ||
                    isChecked_errorStatus ||
                    isModify_errorStatus ||
                    isCheckingStatus ||
                    isChecked_not_availableStatus ">

                <check-header class="col-xs-12"></check-header>

                <div class="ml-lg form-inline" >
                    <div class="form-group" >
                        <datepicker
                                v-model="bkupCheckin"
                                :format="dtpDMY"
                                :label=" labels.from "
                                class="from-to-picker"
                                :dateFrom="today"
                        ></datepicker>
                    </div>
                    <!--   datepickers  -->
                    <div class="form-group" >
                        <datepicker
                                v-model="bkupCheckout"
                                :format="dtpDMY"
                                :label="labels.to"
                                class="from-to-picker"
                                :dateFrom="dateToDisabledData"
                        ></datepicker>
                    </div>

                    <button-check-modify  />
                </div>

                <modify-warning class="col-xs-12 ml-lg" />
                <hr/>
                <button-delete-reservation class="col-xs-12" />
            </div>

            <confirm-date class="col-xs-12" />

        </div>

        <item-detail class="col-xs-12"></item-detail>

    </div>
</template>

<script>
    import { calcTotalPax} from '../../reservationshlp'
    import {plural} from '../../../../../assets/filters/string'
    import numeral from 'numeral'
    import {mapActions} from 'vuex'
    import ItemDetail from './ClientReservationListItemDetail'
    import MainButtonBar from './MainButtonBar'
    import CheckInOutContainer from './CheckInOutContainer'
    import ReservationTotalContainer from './ReservationTotalContainer'
    import ReservationHeader from './ReservationHeader'
    import NotAvailableStatus from './NotAvailableStatus'
    import ConfirmDate from './ConfirmDate'
    import CheckHeader from './CheckHeader'
    import CheckedError from './CheckedError'
    import ButtonCheckModify from './ButtonCheckModify'
    import ButtonDeleteReservation from './ButtonDeleteReservation'
    import ModifyWarning from './ModifyWarning'
    import ModifySuccess from './ModifySuccess'
    import ModifyRequest from './ModifyRequest'

    import Datepicker from '../../../../../assets/components/group-datepicker/GroupDatepicker'
    import _isString from 'lodash/isString'
    import _isArray from 'lodash/isArray'
    import _isDate from 'lodash/isDate'
    import _has from 'lodash/has'
    import upperFirst from 'lodash/upperFirst'
    import moment from 'moment'

    import * as trnConst from '../../pages/client-reservation-list-page/flowconsts'
    import {validateRMngStatusTransiction} from '../../pages/client-reservation-list-page/flowvalidator'
    import allFilters from '../../../../../assets/filters'
    import {mapState} from 'vuex'

    let uid = 0;

    export default {
        watch:{
            bkCheckinAndCheckout(val){
                let bkcin = this.bkupCheckinYMD();
                let bkcout = this.bkupCheckoutYMD();
                if(bkcin>bkcout){
                    this.bkupCheckout = this.bkupCheckin;
                }
            }
        },
        data(){
            return {
                YMD:'YYYY-MM-DD',
                DMY:'DD-MM-YYYY',
                dtpDMY:'dd-MM-yyyy',
                totPax:{},
                isDetailOpened:false,
                bkupCheckin:null,
                bkupCheckout:null
            }
        },
        created(){
            this.totPax=calcTotalPax(this.reservation);
            this.backCheckinCheckout();
        },
        methods:{
            /******************************************************************/
            goViewingStatus(){this.changeStatus(trnConst.RMNG_STATUS_VIEWING)},
            goEditingStatus(){this.changeStatus(trnConst.RMNG_STATUS_EDITING)},
            goCheckingStatus(){this.changeStatus(trnConst.RMNG_STATUS_CHECKING)},
            goChecked_availableStatus(){this.changeStatus(trnConst.RMNG_STATUS_CHECKED_AVAILABLE)},
            goChecked_not_availableStatus(){this.changeStatus(trnConst.RMNG_STATUS_CHECKED_NOT_AVAILABLE)},
            goChecked_errorStatus(){this.changeStatus(trnConst.RMNG_STATUS_CHECKED_ERROR)},
            goModifingStatus(){this.changeStatus(trnConst.RMNG_STATUS_MODIFING)},
            goModify_successStatus(){this.changeStatus(trnConst.RMNG_STATUS_MODIFY_SUCCESS)},
            goModify_errorStatus(){this.changeStatus(trnConst.RMNG_STATUS_MODIFY_ERROR)},
            /******************************************************************/
            changeStatus(status){
                let canTrans = validateRMngStatusTransiction(this.reservationVm.status, status  );
                if(canTrans)
                    this.$emit('change-status',status,this.reservationVm.status,this.reservationVm);
            },
            updateReservation(){
                this.$emit('update-reservation', this.reservationVm);
            },
            plural,
            bkupCheckoutYMD(){
                return moment(this.bkupCheckout,this.DMY).format(this.YMD);
            },
            bkupCheckinYMD(){
                return moment(this.bkupCheckin,this.DMY).format(this.YMD);
            },
            backCheckinCheckout(){
                this.bkupCheckin= moment(this.reservation.checkin).format( this.DMY);
                this.bkupCheckout=moment(this.reservation.checkout).format( this.DMY ) ;
            },
            deleteReservation(){
                this.$emit('delete-reservation',this.reservationVm);
            },
            checkReservation(){
                this.$emit('check-reservation', this.reservationVm, this.bkupCheckinYMD(), this.bkupCheckoutYMD());
            },
            enterEditMode(){
                this.backCheckinCheckout();
                this.goEditingStatus();
            },
            backToEditMode(){
                this.goEditingStatus();
            },
            cancelEditMode(){
                this.backCheckinCheckout();
                this.goViewingStatus();
            },
            exitEditMode(){
                this.backCheckinCheckout();
                this.goViewingStatus();
            },
            toggleDetail(){
                this.isDetailOpened=!this.isDetailOpened;
            },

            isDirtyCheckin(){
                let bkupCheckin = moment(this.bkupCheckin,this.DMY).format(this.YMD);
                return (bkupCheckin!=this.reservation.checkin)
            },
            isDirtyCheckout(){
                let bkupCheckout = this.bkupCheckoutYMD();
                return (bkupCheckout!=this.reservation.checkout) ;
            }
        },
        components:{
            NotAvailableStatus,
            ItemDetail,
            Datepicker,
            CheckHeader,
            MainButtonBar,
            ModifyWarning,
            ReservationHeader,
            ReservationTotalContainer,
            ConfirmDate,
            ModifySuccess,
            ModifyRequest,
            CheckedError,
            ButtonCheckModify,
            ButtonDeleteReservation,
            CheckInOutContainer
        },
        filters:{
            ...allFilters
        },
        props: {
            /* ---------------------------
             * reservationVm.status
             * --------------------------
             *  viewing : default
             *  editing : after 'Manage reservation' button pressed
             *  checking : in edit mode after 'Search' button pressed
             *  checked_available : after checking status
             *  checked_not_available : after checking status
             *  checked_error : after checking status
             *  modifing : after 'Confirm' button pressed
             *  modify_success after modifing status
             *  modify_error after modifing status
             *  deleting after 'Delete' button pressed
             */
            reservationVm:Object,
            canEdit:Boolean,
            /**
             * values
             * actual,old
             */
            type:String
        },
        computed:{
            ...mapState(['labels','message','error']),
            bkCheckinAndCheckout(){
                return this.bkupCheckin +'_' +this.bkupCheckout ;
            },
            checkModifyResult(){
                return this.reservationVm.checkModifyResult;
            },
            isAjaxAction(){
                if(this.isCheckingStatus)
                    return true;
                if(this.isModifingStatus)
                    return true;

                return false;
            },
            reservation(){
                return this.reservationVm.reservation;
            },
            detail(){
                return this.reservationVm.reservation.roomsDetails;
            },
            hasModifyRequest(){
                return _has(this.reservationVm.reservation,'modifyRequest');
            },
            modifyRequest(){
                return this.reservationVm.reservation.modifyRequest;
            },
            status(){
                return this.reservationVm.status;
            },
            isCancelStatusWaiting(){
                if(this.reservation && this.reservation.cancelStatus)
                    return (this.reservation.cancelStatus==='waiting');
                return false;
            },
            isCancelStatusExecuted(){
                if(this.reservation && this.reservation.cancelStatus)
                    return (this.reservation.cancelStatus==='executed');
                return false;
            },
            isCancelStatusNone(){
                if(this.reservation && this.reservation.cancelStatus)
                    return (this.reservation.cancelStatus==='none');
                return false;
            },
            isViewingStatus(){
                return (this.reservationVm.status==trnConst.RMNG_STATUS_VIEWING   );
            },
            isEditingStatus(){
                return (this.reservationVm.status==trnConst.RMNG_STATUS_EDITING   );
            },
            isCheckingStatus(){
                return (this.reservationVm.status==trnConst.RMNG_STATUS_CHECKING   );
            },
            isChecked_availableStatus(){
                return (this.status==trnConst.RMNG_STATUS_CHECKED_AVAILABLE   );
            },
            isChecked_not_availableStatus(){
                return (this.reservationVm.status==trnConst.RMNG_STATUS_CHECKED_NOT_AVAILABLE   );
            },
            isChecked_errorStatus(){
                return (this.reservationVm.status==trnConst.RMNG_STATUS_CHECKED_ERROR   );
            },
            isModifingStatus(){
                return (this.reservationVm.status==trnConst.RMNG_STATUS_MODIFING   );
            },
            isModify_successStatus(){
                return (this.reservationVm.status==trnConst.RMNG_STATUS_MODIFY_SUCCESS   );
            },
            isModify_errorStatus(){
                return (this.reservationVm.status==trnConst.RMNG_STATUS_MODIFY_ERROR   );
            },
            today(){
                return new Date();
            },
            isDirty(){
                if( this.isDirtyCheckin() ) return true;
                return ( this.isDirtyCheckout() );
            },
            archivedType(){
                return this.type;
            },
            manageButtonDisabled(){
                if(!this.canEdit) return true;
                if(this.isCancelStatusExecuted) return true;
                return this.isEditingStatus;
            },
            language(){
                return 'it';
            },
            currency(){
                if(!this.reservation.currency)
                    return "€";
                return (this.reservation.currency=='EUR')?'€':this.reservation.currency ;
            },
            dateToDisabledData(){
                return this.bkupCheckinYMD();
            },
            lblAdults:function(){
                return plural( this.totPax.adults,this.labels.adult,this.labels.adults )  ;
            },
            lblChildren:function(){
                return plural( this.totPax.children,this.labels.child,this.labels.children )  ;
            }
        }
    }


</script>

<style >
    .spinner-container{
        position:relative;
        top:0;
        color:silver;
    }
    spinner-container.modifing{
        top:10px;
    }
    .verify-label{
        font-size:12px;
    }
    .disclaim{
        font-size:10px;
        padding: 14px 0;
    }
    .btn-sm, .btn-group-sm > .btn {
        padding: 5px 20px !important;
    }

    .btn.cancel-management:hover,
    .btn.cancel-management:focus,
    .btn.cancel-management.focus,
    .btn.cancel-management{
        background-color:#a1a1a1;
        color:white;
    }
    .control-button{

    }
    .control-button-delete{  }
    .total-text{ margin-right:10px; }
    .cashback-text{ margin-right:10px; }
    .date-edit-box-container{
        margin-bottom:10px;
        padding:2px 0 2px 0;
        border-radius: 3px;
    }
    .detail-panel{
        margin-top:8px;
    }
    .pointer{
        cursor: pointer;
    }
    .reservation-detail-container{
        height:80px;
        border-top:1px solid #ededed;
    }

    .bold{
        font-weight: bold;
    }
    .float-left{
        float:left;
    }
    .date-view-box-container{
        margin-bottom:4px;
    }
    .reservation-total-container{
        margin-bottom:10px;

    }

    .input-group.date-selection{
        width: 160px;
    }
    .hover-datepicker{
        margin:0;
        padding:0;

    }
    .from-to-picker{
        padding: 4px 8px !important;
    }
</style>