import users from './users.js';
const getSortedUniqueSkills = users => {
  const copy = [];
  users
    .map(user => user.skills)
    .reduce((all, user) => {
      return [...all, ...user];
    }, [])
    .forEach(x => {
      if (!copy.includes(x)) {
        copy.push(x);
      }
    });

  return copy.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa',
//   'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit',
//   'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
