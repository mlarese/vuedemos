export const objectToLabelValue =(object,translateFn)=>{
    let ret = [];
    for(let value in object ){
        let label = translateFn(object[value]);
        ret.push( { label,value });
    }
    return ret;
};

export const translateObject =(object,translateFn)=>{
    let result = {};
    for(let key in object){
        result[key] = translateFn(key);
    }
    return result;
};
