//singleton pattern
let counter1 = {
  value:0,
  increase: function(){
    this.value++ //메소드 호출을 할경우 this는 counter1을 가리킨다.
  },
  decrease: function(){
    this.value--
  },
  getValue: function(){
    return this.value
  }
}

counter1.increase()
console.log(counter1.getValue())
counter1.increase()
console.log(counter1.getValue())
counter1.increase()
console.log(counter1.getValue())
counter1.decrease()
console.log(counter1.getValue())
// console.log(counter1.value)

//through the singleton pattern, you can only make one output from it.

//if I want to make more than one output with one object, I do it like below.

function makeCounter(){
  return {
    value:0,
    increase: function(){
      this.value++ //메소드 호출을 할경우 this는 makeCounter함수가 리턴하는 익명의 객체를 가리킨다.
    },
    decrease: function(){
      this.value--
    },
    getValue: function(){
      return this.value
    }
  }
}

let counter2 = makeCounter()
counter2.increase()
counter2.increase()
counter2.decrease()
counter2.decrease()
console.log(counter2.getValue())

let counter3 = makeCounter()
counter3.increase()
counter3.decrease()
counter3.decrease()
counter3.decrease()
console.log(counter3.getValue())

