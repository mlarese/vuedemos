import {getToday} from '../../../assets/datehlp'
import _filter from 'lodash/filter'

const today = getToday();

/**
 * filterActualReservations
 * @param reservations
 */
export const filterActualReservations=(reservations)=>{
    return _filter(
        reservations,
        o=>{ return o.reservation.checkin>=today ;   }
    );
};

/**
 * filterOldReservations
 * @param reservations
 */
export const filterOldReservations=reservations=>{
    return _filter(
        reservations,
        o=>{    return o.reservation.checkin<today ;   }
    );
};

/**
 * @param reservation
 */
export const calcTotalPax=reservation=>{
    let adults=0, children=0 ;

    if(reservation.roomsDetails){

        if(reservation.roomsDetails.length>0){

            for(let i=0;i<reservation.roomsDetails.length;i++){
                let room = reservation.roomsDetails[i];

                if(room.guests){
                    if(room.guests.adults) adults+=room.guests.adults*1;
                    if(room.guests.children) children+=room.guests.children.count*1;
                }
            }
        }
    }

    return {adults,children};
};