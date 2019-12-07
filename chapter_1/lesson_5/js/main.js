// // // // // var secondName = 'secondName';

// // // // // // let name = 'someName';

// // // // // // const surName = 'surName';

// // // // // function example() {
// // // // //     var firstName = 'Emir';
// // // // //     function example2() {
// // // // //         console.log(firstName);

// // // // //     }
// // // // // }

// // // // // example();


// // // // // function OneBigFuunc() {
// // // // //     let name = 'Fais';
// // // // //     name = 'Emir';
// // // // //     console.log(name);
// // // // // }

// // // // // OneBigFuunc();

// // // // for( i = 0; i < 3; i++) {

// // // // }

// // // // console.log(i);



// // // // var x = 10;


// // // // console.log(x);

// // // // var x = 10;

// // // // let emir = 'value';

// // // // console.log(window.emir)

// // // const obj = {
// // //     name: 'Fais',
// // //     lastName: 'Iraqi'
// // // };

// // // obj.name = 'Pipi'
// // // obj.lastName = 'Sasa' 
// // // console.log(obj);

// // const arr = [1,2,3];

// // arr[0] = 'Hello';
// // arr.pop();

// // console.log(arr);

// let name = 'SomeName';
// let secondName = name;

// secondName = 'Emir';

// console.log(name);
// console.log(secondName); 

// let obj = {
//     name: 'SomeName'
// }
// let obj2 = obj;

// obj2.name = 'Emir';

// console.log(obj.name);
// console.log(obj2.name);

// const obj = {
//     name: 'Fais',
//     group: 'JS'
// }

// const obj2 = {...obj};
// obj2.group = 'Python'

// console.log(obj);
// console.log(obj2);

// const arr = [1,2,3,4,5];
// const arr2 = arr;

// arr2[0] = 'NEW';
// console.log(arr, arr2);

const arr = [1,2,3,4,5];
const arr3 = ['h', 'j'];
const arr2 = [...arr,...arr3];
                                            //NADO PONYAT 
arr2[0] = arr3;

console.log(arr, arr2);


// const obj = {
//     name: 'someName',7
//     lastName: 'lastName'
// }
                                                     //NADO PONYAT 
// const obj2 = {
//     ...obj,
//     age: 20,
//     name: 'Faisal'
// }

// console.log(obj2);


// const people = ['Jack', 'John', 'Police', 'Bill', 'Paul']
// const hata = [];

// for(let i = 0; i < people.length; i++) {
//     if(people[i] === 'John') continue;
//     if(people[i] === 'Polece') break;
//     hata.push(people[i]);
// }
// console.log(hata);