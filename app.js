// const say = () => {
//   console.log("Helo i'm always calling true or false dosen't matter!");
// };

// let completed = false;
// let pp = new Promise((resolve, reject) => {
//   // pending
//   setTimeout(() => {
//     if (completed) {
//       resolve("Hey i've learned about promises."); // resolve
//     } else {
//       reject("Sorry, don't learn yet!"); // reject
//     }
//   }, 1000);
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     say();
//   });

// let's discribe about set data-structrues
let sds = new Set();
sds.add("a");
sds.add([1, 2, 3]);
sds.add({ name: "shakil" });
console.log(sds);
