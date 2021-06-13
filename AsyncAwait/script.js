// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Selesai')
//     }, 2000);
// });
// console.log(coba)
// coba.then(() => {console.log(coba)})

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000
        if(waktu < 5000) {
            setTimeout(() => {
                resolve('Selesai')
            }, waktu);
        } else {
            reject('Kelamaan!')
        }
    });
}

// const coba = cobaPromise()
// coba
// .then((param1) => { console.log(param1) })
// .catch((param2) => { console.log(param2)})

async function cobaAsync() {
  try {
    const coba = await cobaPromise()
    console.log(coba)
  } catch (err) {
    console.error(err)
  }
}

cobaAsync()