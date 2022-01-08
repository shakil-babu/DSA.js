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

// size
const size = hashSet.size;

// clear all item
hashSet.clear();

console.log(hashSet);
