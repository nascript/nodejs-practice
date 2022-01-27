var yourName = 'nasution'; // ketika menggunakan var maka value nya tidak dapat diakses di dalam skop lain
let yourAge = 12; // dapat diakses dari skop lain
const hasHobbies = 'bola'; //constant variabel tidak dapat di re inisiasi value nya

yourName = 'aan';
yourAge = 10;

const summarizeUser = (userName, userAge, userHobbies) => {
  //penggunaan arrow function lebih singkat
  return `User Name is ${userName} and User Age is ${yourAge} and userHobbies is ${userHobbies}`;
};

//penggunaan arrow function lebih singkat
const multiple = (a, v) => a * v; //jika dua argument
const add = a => a + 2; //jika satu argument bisa ditulis tanpa tanda kurung
const divide = () => 2 / 3; //jika argument kosong

console.log(multiple(2, 4));
console.log(add(2));
console.log(divide());

console.log(summarizeUser(yourName, yourAge, hasHobbies));
