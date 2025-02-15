const arr = ["noise", "ear","eyes"]
const arr2 = JSON.stringify(arr);
console.log( typeof arr2)
arr3 = JSON.parse(arr2);

arr3[0] = "someone";
console.log(arr3[0])
// console.log(typeof arr)
// const newArr = JSON.stringify(arr);
// const newArr2 = JSON.parse(newArr);
// console.log(typeof newArr2)

