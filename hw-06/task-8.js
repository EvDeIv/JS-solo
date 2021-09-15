import users from './users.js';
const getUsersWithFriend = (users, friendName) =>
  users.reduce((names, user) => {
    if (user.friends.includes(friendName)) {
      names.push(user.name);
    }
    return names;
  }, []);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
