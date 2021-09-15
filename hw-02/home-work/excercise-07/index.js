const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  const isLogValid = login.length >= 4 && login.length <= 16;
  return isLogValid;
};

const isLoginUnique = function(allLogins, login) {
  for (existingLogin of allLogins) {
    if (existingLogin === login) {
      return false;
    }
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  if (isLoginUnique(allLogins, login) === false) {
    return console.log('Такой логин уже используется!');
  }
  allLogins.push(login);
  return console.log('Логин успешно добавлен!');
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
