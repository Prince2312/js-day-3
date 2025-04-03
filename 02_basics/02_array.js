const marvel_heros =["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const hero = marvel_heros.concat(dc_heros);
// console.log(hero);

 const all_heros = [...marvel_heros,...dc_heros];
// console.log(all_heros);

const another_array =[1,2,3,[4,5,6,[7,8,9,[1,2,3,4,5,],[1,2,3,4,]]]];
console.log(another_array);
const real = another_array.flat(Infinity);
console.log(real);