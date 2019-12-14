// let country = ['Kyrgyzstan', 'Russia', 'USA', 'France'];

// function sortCountries(cn) {
//     var longestWord = '';
//     for (var i = 0; i < cn.length; i++){
//        if (cn[i].length > longestWord.length){
//         longestWord = cn[i];
//        }
//     }
//     return longestWord;
// }

// console.log(sortCountries(country))






// // function findLongestWord(str) {
// //   var strSplit = str.split(' ');
// //   var longestWord = 0;
// //   for(var i = 0; i < strSplit.length; i++){
// //     if(strSplit[i].length > longestWord){
// // 	longestWord = strSplit[i].length;
// //      }
// //   }
// //   return longestWord;
// // }
// // findLongestWord("The quick brown fox jumped over the lazy dog");






// // let countryList = ['Kyrgyzstan', 'Russia', 'USA', 'France'];

// // function sortCountries() {
// //     countryList.sort();
// //     // let first = countryList[1];
// //     //  let last = countryList[countryList.length-1];
// //     console.log(countryList);
// // }


// // sortCountries(countryList);


// // let a = prompt('Сколько будет квадратный корень из 144?');
// // switch (a) {
// //   case '11':
// //     alert( 'Маловато' );
// //     break
// //   case '12':
// //     alert( 'В точку!' );
// //     break;
// //   case '13':
// //     alert( 'Перебор' );
// //     break;
// //   default:
// //     alert( "Дам подсказку, спроси у Файсала)" );
// // }







// let question = prompt('Какой язык программирования вы считаете лучше?');
// if (question === 'javascript') {
//     alert('Все верно, конечно javascript)');
// }else {
//     alert('Броо, мне кажется ты попал не в ту группу(');
// }



// let country = ['Kyrgyzstan', 'Russia', 'USA', 'France'];

// function sortCountries() {
//     var nameLengths = country.map(function(name) {
//         return name.length  ;
//     });
//     nameLengths.sort(function(a, b){return a - b});
//     nameLengths.reverse();
    
    


    
//     console.log(nameLengths);


//         }


// sortCountries(country);



// let country = ['Kyrgyzstan', 'Russia', 'USA', 'France'];

// function sortCountries(){
//     var longestWord = 0;
//     for (var i = 0; i < country.length; i++){
//         if(country[i].length > longestWord){ 
//             longestWord =country[i].length;
//             console.log(longestWord);   
//         }
//         return longestWord;
//     }
//     }
    
//     sortCountries(country);


// let countryList = ['Kyrgyzstan', 'Russia', 'USA', 'France'];

// function sortCountries() {
//     var longestWord = reduce(function(longest, countryList) {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, '');
//     return longestWord.length;
    
// }
// console.log(longestWord);

// countryList.sortCountries();


// function longestCountries(arr) {
//     let country = arr.sort(function (a,b) {
//         return a.length - b.length;
//     })
//     return country.pop();
// }    

// function shortesCountries(arr) {
//     let country = arr.sort(function(a,b){
//         return a.length - b.length;
//     })
//     return country.shift();
// }


// let countryList = ['Kyrgyzstan', 'Russia', 'USA', 'France'];
// console.log(longestCountries(countryList));
// console.log(shortesCountries(countryList));

// countryList.longestCountries();











