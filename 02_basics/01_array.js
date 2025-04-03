const myArr =[1,2,3,4,5,"prince","singh"];
const myHeros = ["shaktiman","naagraj"];
const myArr2 = new Array(1,2,3,4,5,"prince");
console.log(myArr);
console.log(myArr[5]);
console.log(myArr2);

myArr.push(4,7);
console.log(myArr);

myArr.pop(7);
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift(9);
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join();
console.log(newArr);

console.log("A",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);