const fetchData = () => {
  const varPromise = new Promise((resolve, reject) => {
    //dua argument pada Promis, satu penyelesain, kedua penolakan seperti error

    setTimeout(() => {
      resolve('Done');
    }, 1500);
  });

  return varPromise;
};

//pengguna promise adalah agar tidak membuat callback function sehingga ketika pemanggilan tidak bersarang

// asyncronoud code
setTimeout(() => {
  //callback function
  console.log(`timer is done`);
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
      console.log(text2);
    });
}, 2000); // disebut asyncronous karena kode tidak langsung dirender tapi menunggu waktu yg ditetapkan

// callback function akan memiliki masalah ketika akan banyak operasi async yang bersarang/nested oleh karena itu perlu menggunakan Promise

// synchronous code
console.log(`hello`);
console.log(`nas`);
console.log(`i am fine nas`);
