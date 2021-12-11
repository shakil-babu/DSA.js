// ============================== Set data structure =====================================

// set declaration
const hashSet = new Set([
  { name: "Shakil Babu" },
  { name: "Torikus sadik raihan" },
]);

// add item
hashSet.add({ name: "Fahim morshed" });
hashSet.add({ name: "Afifa rahman" });

// delete item
hashSet.forEach((item) => {
  if (item.name === "Shakil Babu") {
    hashSet.delete(item);
  }
});

// has item
for (let item of hashSet) {
  if (hashSet.has(item.name)) {
    console.log("She is female!");
  }
}

console.log(hashSet);
