export function dateFormat(date) {
  const parseDate = new Date(date * 1000);
  let month;
  switch (parseDate.getMonth()) {
    case 0:
      month = 'янв';
      break;
    case 1:
      month = 'фев';
      break;
    case 2:
      month = 'марта';
      break;
    case 3:
      month = 'апр';
      break;
    case 4:
      month = 'мая';
      break;
    case 5:
      month = 'июня';
      break;
    case 6:
      month = 'июля';
      break;
    case 7:
      month = 'авг';
      break;
    case 8:
      month = 'сент';
      break;
    case 9:
      month = 'окт';
      break;
    case 10:
      month = 'ноября';
      break;
    case 11:
      month = 'дек';
      break;
  }
  return parseDate.getDate() + ' ' + month;
}

export function category(cat) {
  switch (cat) {
    case 'news':
      return 'новости';
    case 'event':
      return 'события';
    case 'place':
      return 'места';
    case 'list':
      return 'подборки';
    default:
      return 'не известно';
  }
}
