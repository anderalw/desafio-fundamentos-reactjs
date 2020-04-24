import moment from 'moment-timezone';

const formatDate = (value: Date): string => {
  const date = moment(value);
  const converted = date.tz('America/Bahia').format('DD/MM/YYYY');
  return converted;
};

export default formatDate;
