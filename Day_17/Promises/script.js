// Constructuring a promise Object 

// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = true;
//     if(isCoffeeMakerReady) {
//       resolve("Kopi berhasil dibuat");
//     } else {
//       reject("Mesin Kopi tidak bisa digunakan!")
//     }
//    }
    
//    const makeCoffee = new Promise(executorFunction);
//    console.log(makeCoffee);


// // PRomise resolve

// const executorFuction = (resolve, reject) =>{
//     const isCoffeMakerReady = true;
//         if(isCoffeMakerReady){
//             resolve("coffe berhasil di buat")
//         }
//         else {
//             reject("mesin kopi tidak dapat di gunakan")
//         }
// }

// const handlerSuccess = resolvedValue => {
//     console.log(resolvedValue)
// }

// const makecoffe = new Promise (executorFuction);
// makecoffe.then(handlerSuccess)




// Promise Reject 

// const executorFuction = (resolve, reject) =>{
//     const isCoffeMakerReady = false;
//         if(isCoffeMakerReady){
//             resolve("coffe berhasil di buat");
//         }
//         else {
//             reject("mesin kopi tidak dapat di gunakan")
//         }
// }

// const handlerSuccess = coffe => {
//     console.log(coffe);
// }

// const handlerReject = rejectionReason => {
//     console.log(rejectionReason)
// }

// const makecoffe = new Promise (executorFuction);
// makecoffe.then(handlerSuccess,handlerReject);




// On Reject With Catch Method

// const executorFunction = (resolve, reject) => {
//   const isCoffeeMakerReady = false;
//   if(isCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject("Mesin Kopi tidak bisa digunakan!")
//   }
//  }
  
// const makeCoffee = new Promise(executorFunction);
//   makeCoffee
//     .then(handlerSuccess)
//     .catch(handlerRejected);
 







// Chaining Promise 

// const state = {
//   isCoffeeMakerReady: true,
//   seedStocks: {
//     arabica: 250,
//     robusta: 60,
//     liberica: 80
//   }
//  }
  
//  const getSeeds = (type, miligrams) => {
//   return new Promise((resolve, reject) => {
//     if(state.seedStocks[type] >= miligrams) {
//       state.seedStocks[type] -= miligrams;
//       resolve("Biji kopi didapatkan!")
//     } else {
//       reject("Maaf stock kopi habis!")
//     }
//   });
//  }
  
//  const makeCoffee = seeds => {
//   return new Promise((resolve, reject) => {
//     if(state.isCoffeeMakerReady) {
//       resolve("Kopi berhasil dibuat!")
//     } else {
//       reject("Maaf mesin tidak dapat digunakan!");
//     }
//   })
//  }
  
//  const servingToTable = coffee => {
//   return new Promise(resolve => {
//     resolve("Pesanan kopi sudah selesai!")
//   })
//  }
  
//  function reserveACoffee(type, miligrams) {
//   getSeeds(type, miligrams)
//   .then(makeCoffee)
//   .then(servingToTable)
//   .then(resolvedValue => {
//     console.log(resolvedValue);
//   })
//   .catch(rejectedReason => {
//     console.log(rejectedReason);
//   })
//  }
  
//  /* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
//  reserveACoffee("liberica", 80);


const arabicaOrder = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve ('Kopi Arabica Selesai')
    }, 4000)
  })
}

const robustaOrder = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Kopi robusta selesai!")
    }, 2000)
  })
 }

 const libericaOrder = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Kopi liberica selesai!")
    }, 3000)
  })
 }


 const promise = [arabicaOrder(),robustaOrder(),libericaOrder()];

 promise.all(promise)
 .then(resolvedValue => {
   console.log(resolvedValue);
 })

