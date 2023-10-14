function whileLoop1() {
  let i = 0;
  const myArray = [];
  while (i < 10) {
    myArray.push(i);
    i++;
  }
  return myArray;
}
console.log('whileLoop1 Output', whileLoop1());

function whileLoop2() {
  let i = 0;
  const myArray = [];
  while (i <= 18) {
    myArray.push(i);
    i += 2;
  }
  return myArray;
}
console.log('whileLoop2 Output', whileLoop2());

function forLoop1() {
  const myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  return myArray;
}
console.log('forLoop1 Output', forLoop1());

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time till explosion ' + index + '!');
  }
}
forLoop2();

function forInLoop1(object) {
  const array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('for in loop 1 output', forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}
console.log('for in loop 2 output', forInLoop2(object));
