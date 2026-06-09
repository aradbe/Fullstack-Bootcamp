class Exercises {
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }

  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }

  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }

  validate(arr) {
    let booleans = arr.filter((x) => typeof x === "boolean");

    if (booleans.length === 0) {
      return { error: "Need at least one boolean" };
    }

    let trues = booleans.filter((x) => x === true).length;
    let falses = booleans.filter((x) => x === false).length;

    return trues > falses;
  }
}

module.exports = Exercises;
