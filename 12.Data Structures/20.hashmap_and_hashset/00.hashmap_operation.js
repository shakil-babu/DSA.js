// create a hasmap
let data = new Map([
  ["sl", 1],
  ["details", { name: "Shakil Babu", age: 20, dream: "Software Engineer" }],
  ["sayName", (name) => console.log("Hello, " + name)],
  ["a", "abc"],
  ["b", "bac"],
]);

// set item
data.set("favLans", ["JavaScript", "C++", "TypeScript"]);
data.set(["SSC", "DIPLOMA"], ["CHS", "VTTI, BOGURA"]);

// get item
let favLans = data.get("favLans");
console.log(favLans);
data.get("sayName")("Babu");

// check keys
if (data.has("sl")) {
  console.log("Yes!");
} else console.log("No!");

// delete item
data.delete("a");
data.delete("b");

// size of map
let size = data.size;
console.log(size);

// iterate map / loop through in map

// using forEach
// data.forEach((value, key) => {
//   console.log(`${key} - ${value}`);
// });

// using for of loop
// for (let value of data) {
//   console.log(value);
// }

// using for of loop and keys(), values(), entries()
// for (let key of data.keys()) {
//   console.log(data.get(key));
// }

// using entries()
for (let [key, value] of data.entries()) {
  console.log(key, value);
}

// map to object
// let datas = Object.fromEntries(data.entries());
// console.log(datas);

// object to map
let obj = {
  name: "shakil",
  age: 20,
  dream: "Software Engineer",
};

let hashMap = new Map(Object.entries(obj));
console.log(hashMap);
