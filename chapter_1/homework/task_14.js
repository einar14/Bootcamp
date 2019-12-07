 var animal = prompt('Введите слово');

for (var x = 0; x < animal.length ; x++ ) {
    // console.log(x);
    for(var y = x + 1; y < animal.length + 1; y++) {
        // console.log(y);
        console.log(animal.slice(x,y))
    }
}

console.log(animal.slice(x,y))


/* DOG

0 X
1 Y
D
2
DO
3
DOG
1 X
2 Y
O
3 Y
OG
2 X
3 Y
G
3 X
*/
