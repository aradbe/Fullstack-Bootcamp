const Exercises = require("./code");
const exercises = new Exercises();

test("isEven should return true for an even number", () => {
  expect(exercises.isEven(4)).toBeTruthy();
});

test("removeAtLeastOne should remove at least one element", () => {
  const arr = [1, 2, 3, 4, 5];
  const originalLength = arr.length;

  const result = exercises.removeAtLeastOne(arr);

  expect(result.length).toBeLessThan(originalLength);
});

test("simplify should remove symbols", () => {
  const result = exercises.simplify("Hello, world!");

  expect(result).toBe("Hello world");
});

test("validate should return true when there are more trues than falses", () => {
  expect(exercises.validate([true, true, false])).toBeTruthy();
});


//Exercise 5

test("isEven should return false for an odd number", () => {
    expect(exercises.isEven(3)).toBeFalsy()
})

test("removeAtLeastOne should return an array", () => {
    const result = exercises.removeAtLeastOne([1, 2, 3])

    expect(Array.isArray(result)).toBeTruthy()
})

test("simplify should not change a string with no symbols", () => {
    expect(exercises.simplify("hello")).toBe("hello")
})

test("validate should return an error when there are no booleans", () => {
    expect(exercises.validate([1, "hello", null]))
        .toEqual({ error: "Need at least one boolean" })
})