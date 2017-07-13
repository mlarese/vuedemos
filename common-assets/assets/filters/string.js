import _upperFirst from 'lodash/upperFirst'

export const plural=(value,singular,plural)=> {

    return (value*1 === 1 ? singular : plural)
};

export const upperFirst=(value)=>{
    return _upperFirst(value);
};