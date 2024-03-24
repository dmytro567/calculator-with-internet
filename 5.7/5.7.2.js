function aclean(arr){
let mySet = new Set();
for(word of arr){
mySet.add(word.toUpperCase().split('').sort().join(''))
}
return Array.from(mySet);
}
