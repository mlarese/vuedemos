import browserLocale  from 'browser-locale'

let locale = null;
export const getBrowserLocale=()=>{
    if(locale == null){
        let language = browserLocale();
        locale = language.split('-')[0];
    }

    return locale;
};