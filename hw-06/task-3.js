import users from './users.js';
const getUsersWithGender = (users, gender) =>
  users.reduce((names, user) => {
    if (user.gender === gender) {
      names.push(user.name);
    }
    return names;
  }, []);

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
