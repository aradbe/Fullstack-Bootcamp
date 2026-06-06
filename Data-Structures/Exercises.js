//Exercise 1

class UniqueArray {
  constructor() {
    this.arr = [];
    this.obj = {};
  }

  add(item) {
    if (!this.obj[item]) {
      this.arr.push(item);
      this.obj[item] = true;
    }
  }

  showAll() {
    console.log(this.arr);
  }

  exists(item) {
    if (this.obj[item]) {
      return true;
    }
    return false;
  }

  get(index) {
    if (index < this.arr.length) {
      return this.arr[index];
    }
    return -1;
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists("toy"); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"

//Exercise 2

class UniqueArray {
  constructor() {
    this.arr = [];
  }

  add(item) {
    if (!this.exists(item)) {
      this.arr.push(item);
    }
  }

  showAll() {
    console.log(this.arr);
  }

  exists(item) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] == item) {
        return true;
      }
    }
    return false;
  }
  get(index) {
    if (index < this.arr.length) {
      return this.arr[index];
    }
    return -1;
  }
}

const u = new UniqueArray()

u.add({x: 3})
u.add({x: 3})

u.showAll()