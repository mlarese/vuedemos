import moment from 'moment'

export const DMY=(value)=>{
    if(!value) return '';
    return moment(value).format(  'DD-MM-YYYY'  );
};