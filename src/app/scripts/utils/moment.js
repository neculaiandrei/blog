import moment from 'moment';
import 'moment/locale/ro';

moment().locale('ro');

moment.updateLocale('ro', {
  months: 'Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie'.split('_'),
});

export default moment;
