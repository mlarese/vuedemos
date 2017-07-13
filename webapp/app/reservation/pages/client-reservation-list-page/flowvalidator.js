import * as flConst from './flowconsts'
import _find from 'lodash/find'

const allowedTransictions = {
    [flConst.RMNG_STATUS_VIEWING]:[
        {status:flConst.RMNG_STATUS_EDITING}
    ],
    [flConst.RMNG_STATUS_EDITING]:[
        {status:flConst.RMNG_STATUS_VIEWING,},
        {status:flConst.RMNG_STATUS_CHECKING}
    ],
    [flConst.RMNG_STATUS_CHECKING]:[
        {status:flConst.RMNG_STATUS_VIEWING},
        {status:flConst.RMNG_STATUS_CHECKED_AVAILABLE},
        {status:flConst.RMNG_STATUS_CHECKED_ERROR},
        {status:flConst.RMNG_STATUS_CHECKED_NOT_AVAILABLE}
    ],
    [flConst.RMNG_STATUS_CHECKED_AVAILABLE]:[
        {status:flConst.RMNG_STATUS_VIEWING},
        {status:flConst.RMNG_STATUS_EDITING},
        {status:flConst.RMNG_STATUS_MODIFING}
    ],
    [flConst.RMNG_STATUS_CHECKED_NOT_AVAILABLE]:[
        {status:flConst.RMNG_STATUS_EDITING},
        {status:flConst.RMNG_STATUS_VIEWING}
    ],
    [flConst.RMNG_STATUS_CHECKED_ERROR]:[
        {status:flConst.RMNG_STATUS_VIEWING},
        {status:flConst.RMNG_STATUS_EDITING}
    ],
    [flConst.RMNG_STATUS_MODIFING]:[
        {status:flConst.RMNG_STATUS_VIEWING},
        {status:flConst.RMNG_STATUS_MODIFY_SUCCESS},
        {status:flConst.RMNG_STATUS_MODIFY_ERROR}
    ],
    [flConst.RMNG_STATUS_MODIFY_ERROR]:[
        {status:flConst.RMNG_STATUS_VIEWING}
    ],
    [flConst.RMNG_STATUS_MODIFY_SUCCESS]:[
        {status:flConst.RMNG_STATUS_VIEWING}
    ]
};
export const validateRMngStatusTransiction=(currentStatus,status)=>{
    const transiction = allowedTransictions[currentStatus];
    let ret = false;

    if(!transiction)
        return ret;

    const res = _find(transiction,{'status':status});
    if(res) ret=true;

    return ret;
};

export const validationConst = flConst;