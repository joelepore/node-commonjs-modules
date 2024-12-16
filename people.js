const getFullNameObject = require('./names');
const getHobbies = require('./hobbies');

const getFullNameAndHobbies = () => {
  return {
    ...getFullNameObject('Giuseppe', 'Lepore'),
    ...getHobbies('Music', 'Computer Science', 'Skateboarding')
  }
}

console.log(getFullNameAndHobbies());