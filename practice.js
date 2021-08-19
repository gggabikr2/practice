class Counter {
  constructor() {
    this.value = 0;
  }

  increase() {
    this.value++;
  }

  decrease() {
    this.value--;
  }

  getValue() {
    return this.value;
  }
}

let counter1 = new Counter()
counter1.increase()
counter1.getValue() // 1
counter1.value // 1: 접근가능

let counter2 = new Counter()
counter2.decrease()
counter2.decrease()
counter2.getValue() // -2

counter2.value = 4;

console.log(counter2.getValue())
console.log(counter2.value)


// function makeCounter() {
//   let value = 0
//   return {
//     increase: function() {
//       value++ 
//     },
//     decrease: function() {
//       value--
//     },
//     getValue: function() {
//       return value;
//     }
//   }
// }

// let counter1 = makeCounter()
// counter1.increase()
// counter1.getValue() // 1

// let counter2 = makeCounter()
// counter2.decrease()
// counter2.decrease()
// counter2.getValue() // -2

// counter2.value = 3

// console.log(counter2.getValue())
// console.log(counter2.value)