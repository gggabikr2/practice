function foo() {
    return 'bar'
  }
  
//   you also can invoke the function by using .call and .apply methods.
  console.log(foo())        //>>>bar
  console.log(foo.call())   //>>>bar
  console.log(foo.apply())  //>>>bar

  //.call and .apply is for selecting 'this' by myself.
  //the first parameter of these two methods will be 'this'

  console.log(Math.max(5,4,2,6,1))                  //>>>6
  console.log(Math.max([5,4,2,6,1]))                //>>> NaN
  console.log(Math.max.apply(null, [5,4,2,6,1]))    //>>>6
  console.log(Math.max(...[5,4,2,6,1]))             //>>>6  
  //no need to use apply anymore as we now have spread operator(...)

