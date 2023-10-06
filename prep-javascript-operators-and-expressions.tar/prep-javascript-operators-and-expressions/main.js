const number1 = 5;
const number2 = 2;
const product = number1 * number2;
console.log(product, typeof product);

const charge = 10;
const payment = 5;
const amountRemaining = charge - payment;
console.log(amountRemaining, typeof amountRemaining);

const test = 70;
const assignments = 85;
const final = 95;
const grade = (test + assignments + final) / 3;
console.log(grade, typeof grade);

const firstName = 'Lambert';
const lastName = 'Nguyen';
const fullName = firstName + '' + lastName;
console.log(fullName, typeof fullName);

const pH = 5;
const isAcidic = pH < 7;
console.log(isAcidic, typeof isAcidic);

const numberOfSoldiers = 300;
const isSparta = numberOfSoldiers;
console.log(isSparta === numberOfSoldiers, typeof isSparta);

let nickname = fullName;
nickname = nickname + ' is the GOAT';
console.log(nickname, typeof nickname);
