const credits = 23500;
const pricePerDroid = 3000;
const numberOfDroids = prompt('Сколько дроидов вы хотите купить:');
if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = Number(numberOfDroids) * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    alert(
      `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  }
}
