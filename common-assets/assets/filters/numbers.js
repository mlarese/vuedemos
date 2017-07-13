import numeral from 'numeral'

export const money=(value,currency='')=>{
    return   currency + ' ' + numeral(value).format('0,0.00');
};
export const integer=(value)=>{
    return numeral(value).format('0,0');
};