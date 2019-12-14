// function sayHello() {
//     var name = 'Jack';
//     console.log ('Hello ' + name );
//     function sayBye() {
//         console.log('Bye' + name)
//     }
//     sayBye();
// }

// sayHello();

// function sayHello() {
//     let name = 'Jack';
//     return function() {
//         name = 'Hello ' + name;
//         return name
//     }
// }

// let helloFunc = sayHello();

// console.log(helloFunc());
// console.log(helloFunc());
// console.log(helloFunc());


// function sumFunnc(a) {
//     return function(b) {
//         return a + b
//     }
// }

// const sum = sumFunc(5);
// console.log(sum(2));

// function incEnv() {
//     let num = 0;
//     return function() {
//         num++
//         console.log(num);
//     }
// }

// let count = incEnv();

// count();

// function sumFunc(a) {
//     return function(b) {
//         return a + b
//     }
// }

// let sum = sumFunc(3)(5);
// console.log(sum);


// let arrNum = [1,2,3,4,5];

// function checkArr(arr, i = 0) {
//     if(i < arr.length) {
//         console.log(arr[i])
//         i++
//         return checkArr(arr, i)
//     }
// }

// checkArr(arrNum)

// const countryArr = ['Russia', 'France', 'Kyrgyzstan', 'Usa']
// const countryArr2 = ['Japan', 'Canada', 'China', 'Belarus']

// function longAndShort(countryList) {
//     countryList.sort(function(a,b){
//         return a.length - b.length
//     })

//     let leng = countryList.length
    
//     return countryList[0] + ' ' + countryList[leng - 1]
// }

// const result1 = longAndShort(countryArr);
// const result2 = longAndShort(countryArr2);
// console.log(result1,result2)
////


/*

sfdsdfsdf

*/

// == === < > <= >= || && 
