import users from './users.js';
const getInactiveUsers = users =>
  users.reduce((inactiveUsers, user) => {
    if (!user.isActive) {
      inactiveUsers.push(user);
    }
    return inactiveUsers;
  }, []);

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
