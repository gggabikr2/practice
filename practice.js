function Person(first, last, age, gender, interests){

  this.first = first;
  this.last = last;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

var person1 = new Person('Jason','Lee', '29', 'male', ['coding', 'reading books'])

console.log(person1.valueOf())


var person2 = Object.create(person1);
console.log(person2.__proto__)


var person3 = new person1.constructor('Soomin','Park','29','female',['singing','designing'])

console.log(person3)


console.log(person1.constructor)
console.log(person2.constructor)
console.log(person3.first)
console.log(person3.age)

