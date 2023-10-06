const person = { firstName: 'Shohei', lastName: 'Ohtani', hobby: 'baseball' };
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);
person.job = 'flameslugger';
console.log("The person's current job is: ", person.job);
person['previousJob'] = 'mortal being';
console.log("The person's previous job was: ", person['previousJob']);
console.log('The complete person object: ', person);
