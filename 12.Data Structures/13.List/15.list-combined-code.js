class List {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  // push method
  push(value) {
    return (this.data[this.length++] = value);
  }

  // pop method
  pop() {
    if (this.length === 0) return undefined;
    // let popItem = this.data.splice(this.length - 1, 1).join("");
    // this.length--;
    // return popItem;

    // using another way
    let popItem = this.data[this.length - 1];
    this.data.length = this.data.length - 1;
    this.length--;
    return popItem;
  }

  // find method
  find(item) {
    if (this.length === 0) return -1;
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        return i;
      }
    }
    return -1;
  }

  // reverse method
  reverse() {
    if (this.length === 0) return undefined;
    let arr = [],
      index = 0;
    for (let i = this.length - 1; i >= 0; i--) {
      arr[index++] = this.data[i];
    }
    return arr;
  }

  // remove method
  remove(value) {
    let index = this.find(value);
    if (index > -1) {
      this.data.splice(index, 1);
      --this.length;
      return true;
    }
    return false;
  }

  // size method
  size() {
    return this.length;
  }

  // unshift method
  unshift(item) {
    let added = this.data.splice(0, 0, item);
    this.length++;
    return added;
  }

  // shift method
  shift() {
    if (this.length === 0) return 0;
    let shifted = this.data.splice(0, 1);
    --this.length;
    return shifted;
  }

  // contains method
  contains(item) {
    if (this.length === 0) return false;
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        return true;
      }
    }
    return false;
  }

  // startsWith
  startsWith(item) {
    if (this.length === 0) return false;
    else if (this.data[0] === item) return true;
    else return false;
  }

  // endsWith method
  endsWith(item) {
    if (this.length === 0) return false;
    else if (this.data[this.length - 1] === item) return true;
    else return false;
  }

  // insert method
  insert(item, current) {
    let insertPosition = this.find(current);
    if (insertPosition > -1) {
      this.data.splice(insertPosition + 1, 0, item);
      this.length++;
      return true;
    }
    return false;
  }

  // clear method
  clear() {
    delete this.data;
    this.length = 0;
    this.data = [];
    return this;
  }
}

// list
let list = new List();
list.push("Torikus");
list.push("Fahim");
list.push("Babu");
list.push("Shakil");

list.insert("Afifa", "Babu");
console.log(list);
list.clear();
console.log(list);
