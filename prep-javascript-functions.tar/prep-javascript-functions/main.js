function addTwoNumbers(a, b) {
  return a + b;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(n) {
  return n * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(3);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  const result = 'Hello' + ' ' + name + '!';
  return result;
}
const greeting = getGreeting('Bob');
console.log('getGreeting Exercise:', greeting);

function addAndMultiplyByFive(n1, n2) {
  return (n1 + n2) * 5;
}
const addAndMultiplyByFiveResult = addAndMultiplyByFive(3, 2);
console.log('addAndMultiplyByFive Exercise:', addAndMultiplyByFiveResult);

function multiplyAndDivideByFive(n1, n2) {
  return (n1 * n2) / 5;
}
const multiplyAndDivideByFiveResult = multiplyAndDivideByFive(5, 5);
console.log('multiplyAndDivideByFive Exercise:', multiplyAndDivideByFiveResult);

function subtractTwoNumbers(n1, n2) {
  return n1 - n2;
}
const subtractTwoNumbersResult = subtractTwoNumbers(3, 2);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult);

function getCircleCircumference(r) {
  return 3.14 * 2 * r;
}
const getCircleCircumferenceResult = getCircleCircumference(3);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const getFullNameResult = getFullName('Joe', 'Smith');
console.log('getFullName Exercise:', getFullNameResult);

function cube(num) {
  return num ** 3;
}
const cubeResult = cube(3);
console.log('cube Exercise:', cubeResult);
