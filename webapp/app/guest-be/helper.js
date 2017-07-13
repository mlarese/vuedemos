import allFilters from '../../../assets/filters'

export const context = {
    fidelity:{
        valueField:'points'  ,
        value(val){  return val;    } ,
        c:{description:'Prenotazione',shortDescription:'Punti in attesa'},
        e:{description:'Punti maturati',shortDescription:'Punti utilizzabili'},
        u:{description:'Richiesta premio',shortDescription:'Punti utilizzati'},
        t:{description:'Richiesta premio confermata',shortDescription:'Punti rimossi'},
        r:{description:'Punti annullati',shortDescription:'Punti non accreditati'},
        d:{description:'Richiesta premio negata',shortDescription:'Punti utilizzabili'},
    },
    cashback:{
        value(val){  return  allFilters.money( val , '€');    } ,
        valueField:'value',
        c:{description:'Prenotazione',shortDescription:'In attesa'},
        e:{description:'Cashback maturato',shortDescription:'Ritiratbile'},
        u:{description:'Richiesta cashback',shortDescription:'Richiesto'},
        t:{description:'Richiesta cashback confermata',shortDescription:'Confermato'},
        r:{description:'Cashback annullato',shortDescription:'Annullato'},
        d:{description:'Richiesta cashback negata',shortDescription:'Errore iban'},
    }
};

const MADE_ON='Effettuata il';

export const getValueField=type=>context[type]['valueField'];
export const getContext=(type,status)=>context[type][status];
export const getFormattedValue=(type,value)=>{
    const fn = context[type]['value'];
    return fn(value);
};

export const getDescription=(type,status)=>{
    return context[type][status]['description'];
};

export const getDescriptions=(translator,type,status,rawValue,r={structureName:''} )=>{
    const $t = translator;
    const ctx = context[type];
    const value = ctx.value( rawValue )

    switch(status){
        case 'c' : return {shortDescription:$t(ctx[status]['shortDescription']),lblDate:$t(MADE_ON),d: $t(ctx[status]['description']) +' '+ r.structureName , pre:$t('In attesa di accredito') , pd: value +'*' ,sign:'+'};
        case 'e' : return {shortDescription:$t(ctx[status]['shortDescription']),lblDate:$t('Il'),d: $t(ctx[status]['description'])     , pre:''    ,pd: value +'' ,sign:'+'};
        case 'u' : return {shortDescription:$t(ctx[status]['shortDescription']),lblDate:$t(MADE_ON),d: $t(ctx[status]['description']) , pre:''    ,pd: value +'' ,sign:'-'};
        case 't' : return {shortDescription:$t(ctx[status]['shortDescription']),lblDate:$t(MADE_ON),d: $t(ctx[status]['description']) , pre:''    ,pd: value +'' ,sign:'-'};
        case 'r' : return {shortDescription:$t(ctx[status]['shortDescription']),lblDate:$t('Il'),d: $t(ctx[status]['description'])    , pre:''    ,pd: value +'' ,sign:'-'};
        case 'd' : return {shortDescription:$t(ctx[status]['shortDescription']),lblDate:$t(MADE_ON),d: $t(ctx[status]['description']) , pre:''    ,pd: value +'',sign:'+' };
        default : return {d:status,pd:0,sign:'',pre:''}
    }
};