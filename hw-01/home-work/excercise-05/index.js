const userCountry = prompt('Укажите страну доставки:');
if (userCountry === null) {
  console.log('Отменено пользователем!');
} else {
  const userCountryCheck = userCountry.toLowerCase();
  let cost;
  let country;
  switch (userCountryCheck) {
    case 'китай':
      cost = 100;
      country = 'Китай';
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;
    case 'чили':
      cost = 250;
      country = 'Чили';
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;
    case 'австралия':
      cost = 170;
      country = 'Австралия';
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case 'индия':
      cost = 80;
      country = 'Индия';
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case 'ямайка':
      cost = 120;
      country = 'Ямайка';
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    default:
      console.log('В вашей стране доставка не доступна');
  }
}
