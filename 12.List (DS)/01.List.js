class List {
  constructor() {
    this.data = [];
    this.listSize = 0;
  }

  // adding element
  add(element) {
    this.data[this.listSize++] = element;
  }

  // find element
  find(element) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === element) {
        return i;
      }
    }

    return -1;
  }

  // remove element
  remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.data.splice(foundAt, 1);
      --this.listSize;
      return true;
    }

    return false;
  }

  // length of list
  length() {
    return this.listSize;
  }
}
