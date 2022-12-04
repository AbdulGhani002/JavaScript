let a, b;

[a, b] = [54, 55];

// console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

({ a, b, c } = { a: 10, b: 20, c: 30, d: 40, e: 50 });

// console.log(a)
// console.log(b)
// console.log(c)

({ a, b, ...c } = { a: 10, b: 20, c: 30, d: 40, e: 50 });

// console.log(a);
// console.log(b);
// console.log(c);

const fruits = ["Apples", "Bananas", "Mangoes"];

[a, b, c] = fruits;

// console.log(a, b, c);

const laptop = {
  model: "Hp Elitebook",
  generation: 4,
  ram: 4,
  rom: 500,
  SSD: false,
  start: function () {
    return "started";
  },
};

const { model, generation, ram, SSD, start } = laptop;

console.log(model);
console.log(generation);
console.log(ram);
console.log(SSD);
console.log(start);
