var yourName = 'nasution'; // ketika menggunakan var maka value nya tidak dapat diakses di dalam skop lain
let yourAge = 12; // dapat diakses dari skop lain
const hasHobbies = 'bola'; //constant variabel tidak dapat di re inisiasi value nya

yourName = "aan"
yourAge = 10

function summarizeUser(userName, userAge, userHobbies) {
  return `User Name is ${userName} and User Age is ${yourAge} and userHobbies is ${userHobbies}`;
}

console.log(summarizeUser(yourName, yourAge, hasHobbies));
