// === object pada javascript

const name = 'diluar scope';

const person = {
  name: 'nasution',
  age: 22,
  address: 'yogyakarta',

  //didalam object juga bisa ada function, berikut contoh funciton anonymous
  greetName: function () {
    console.log(`hi, iam ${this.name}`); //penggunaaan this adalah untuk merujuk pada variabel yang ada didalam skope objek person
    },
  
  greetNameBedaSyntak() {
    console.log(`hi, iam ${this.address}`); //sama aja kayak yang diatas, cuman gak ada penulisan function
  },

  greetNameLuar: () => {
    console.log(`hi, iam ${name}`); //namun ketika penggunaan arrow function this tidak merujuk pada skope objek person melainkan secara global
  },

  //artinya di dalam objek JS sebaiknya tidak menggunakan arrow function
};

console.log(person);
person.greetName(); //akses fungsi dalam object person
person.greetNameBedaSyntak(); //akses fungsi dalam object person
person.greetNameLuar(); //akses fungsi dalam object person
