class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }

  findNode(value) {
    if (this.value === value) {
      return true;
    }

    if (value > this.value && this.rightChild) {
      return this.rightChild.findNode(value);
    }

    if (value < this.value && this.leftChild) {
      return this.leftChild.findNode(value);
    }

    return false;
  }

  findCommonParent(val1, val2) {
    if (val1 < this.value && val2 < this.value) {
      return this.leftChild.findCommonParent(val1, val2);
    }

    if (val1 > this.value && val2 > this.value) {
      return this.rightChild.findCommonParent(val1, val2);
    }

    return this.value;
  }

  removeNode(parent, value) {
    if (value < this.value) {
      return this.leftChild.removeNode(this, value);
    }

    if (value > this.value) {
      return this.rightChild.removeNode(this, value);
    }

    if (!this.leftChild && !this.rightChild) {
      if (parent.leftChild === this) {
        parent.leftChild = null;
      } else {
        parent.rightChild = null;
      }
    } else if (this.leftChild && !this.rightChild) {
      if (parent.leftChild === this) {
        parent.leftChild = this.leftChild;
      } else {
        parent.rightChild = this.leftChild;
      }
    } else if (!this.leftChild && this.rightChild) {
      if (parent.leftChild === this) {
        parent.leftChild = this.rightChild;
      } else {
        parent.rightChild = this.rightChild;
      }
    } else {
      let maxNode = this.leftChild;

      while (maxNode.rightChild) {
        maxNode = maxNode.rightChild;
      }

      this.value = maxNode.value;
      this.leftChild.removeNode(this, maxNode.value);
    }

    return parent;
  }
}

// Exercise 1
const letters = ["H", "E", "S", "G", "L", "Y", "I"];

const bsTree = new BSNode(letters[0]);

for (let i = 1; i < letters.length; i++) {
  bsTree.insertNode(letters[i]);
}

console.log(bsTree.findNode("H")); // true
console.log(bsTree.findNode("G")); // true
console.log(bsTree.findNode("Z")); // false
console.log(bsTree.findNode("F")); // false
console.log(bsTree.findNode("y")); // false

// Exercise 2
const letters2 = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

const bsTree2 = new BSNode(letters2[0]);

for (let i = 1; i < letters2.length; i++) {
  bsTree2.insertNode(letters2[i]);
}

console.log(bsTree2.findCommonParent("B", "I")); // H
console.log(bsTree2.findCommonParent("B", "G")); // E
console.log(bsTree2.findCommonParent("B", "L")); // J
console.log(bsTree2.findCommonParent("L", "Y")); // R
console.log(bsTree2.findCommonParent("E", "H")); // H

// Exercise 3
const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9));

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8));
