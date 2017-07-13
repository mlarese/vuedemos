import _forEach from 'lodash/forEach'
import _isArray from 'lodash/isArray'
import _extend from 'lodash/extend'

export const extendReservations=(pData)=>{
    let status='viewing';
    let deleted=false;
    let data = [];

    if(!_isArray(pData))
        data.push(pData);
    else
        data = pData;

    let res=[];

    _forEach(  data ,  reservation=>{
        let rvm = { reservation , status ,deleted , checkModifyResult:{} };
        res.push( rvm );
    });

    return res;
};