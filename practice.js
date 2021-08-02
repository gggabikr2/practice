function sumOfArraysInArray(arr) {
    let ddd=[];
    for (i=0; i<arr.length; i++){
      let ccc = arr[i].filter((el)=>typeof(el)==='number').reduce((a,b)=>a+b,0);
      ddd.push(ccc)
    }
    return ddd.reduce((a,b)=>a+b)
  }