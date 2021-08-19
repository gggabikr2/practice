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


Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};

person1.farewell()