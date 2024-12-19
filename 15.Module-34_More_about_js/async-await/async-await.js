// // console.log('logged!');

// const myLoader = () => {
//     return new Promise((resolve, reject) => {
//         const success = Math.random()

//         if (success <= 0.5) {
//             resolve(success)
//         }
//         else {
//             reject(success)
//         }
//     })
// }

// // myLoader() => call this through browser console.

// myLoader()
//     .then(data => console.log("resolve data!", data))



// async function loadData() {
//     const res = await fetch()
//     const data = await res.json()
//     console.log(data);

// }
// loadData()


// // or 
// const taskLoader = async () => {
//     const res = await fetch('')
//     const data = res.json()
//     console.log(data);

// }
// taskLoader()