const person = {
  name: 'nasution',
  age: 22,
  address: 'yogyakarta',
  greetName() {
    console.log(`hi, iam ${this.name}`); //penggunaaan this adalah untuk merujuk pada variabel yang ada didalam skope objek person
  },
};

// before destructuring
const printName = (dataFromPerson) => {
  console.log(`before destructuring ${dataFromPerson.name}`);
};
printName(person);

//after destructuring
const printNameDes = ({ name }) => {
  console.log(`after destructuring ${name}`);
};
printNameDes(person);

// or like this one
const { name, age } = person;
console.log('destructuring object in JS', name, age);

// or like this one
const books = ['mentari', 'senja'];
const [book1, book2] = books;

console.log(`destructuring array ${book1}`);
