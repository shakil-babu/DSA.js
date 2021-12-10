// var hashmap = new Map();
// hashmap.set("name", { name: "shakil" });
// hashmap.set("callme", () => console.log("Hello world!"));
// hashmap.set("favlans", ["js", "c++", "c"]);
// hashmap.set("isMarried", false);
// // hashmap.forEach((item, index) => {
// //   if (index === "isMarried") {
// //     hashmap.set("isMarried", true);
// //   }
// // });

// // console.log(hashmap.get("isMarried"));

// if (hashmap.has("isMarried")) {
//   hashmap.set("isMarried", true);
// }

// let len = hashmap.size();
// console.log(len);
// console.log(hashmap);

// // deleting item from hashmap
// hashmap.delete("isMarried");
// hashmap.clear();

// function create using buil-in Function
var body = "return 'Shakil Babu';";
var say = new Function(body);
console.log(say());
