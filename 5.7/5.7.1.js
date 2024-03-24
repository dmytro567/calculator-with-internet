function unique(arr){
  let newSet = new Set(arr);
  return newSet;
}
let values = ["Hare", "Krishna", "Hare", "Krishna", "krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values));
