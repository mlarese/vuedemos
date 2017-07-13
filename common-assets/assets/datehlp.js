import moment from 'moment'

export const getToday=(format='YYYY-MM-DD')=> {
    return moment().format(format);
};