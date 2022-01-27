// ====== ARRAY =====
const names = ['Nas', 'An', 'koko', 'kiki', 1, true];

for (let name of names) {
  console.log('use for loop', name);
}

console.log(names.map((name) => `use map ${name}`));
console.log(`use call var ${names}`); //panggil variabel array

// push array of names
names.push("hama");
console.log(`after push ${names}`) // bukan berari variabel names dengan const tidak bisa di modif (add delete dll), hal ini tidka merubah variabel melainkan apa yang direferensikan variable
