import users from './users.js';
const calculateTotalBalance = users =>
  users.reduce((sum, user) => {
    return sum + Number(user.balance);
  }, 0);

console.log(calculateTotalBalance(users)); // 20916
