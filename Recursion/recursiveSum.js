function sum(arr) {
  // if(arr.length === 0){
  //     return 0;
  // }
  // return arr[0] + sum(arr.slice(1));

  return arr.length ? arr[0] + sum(arr.slice(1)) : 0;
}

console.log(sum([1, 5, 7, -2]));
