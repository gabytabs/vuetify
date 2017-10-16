import moment from 'moment'

const today = new Date()
export const formattedDate = moment(today, 'MM/DD/YYYY').format('LL')
