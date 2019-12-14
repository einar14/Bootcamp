
function min (num) {

        if ( num >= 0 && num <= 15){
            return ('Первая четверть')
        }else if ( num >= 16 && num <=30){
            return ('Вторая четверть')
        }else if ( num >=31 && num <=45){
            return ('Третья четверть')
        }else if (num >=46 && num <= 60){
            return('Четвертая четверть')
        }
            
}

    
let num = +prompt('Введите от 0 до 60');

console.log(min(num));









// let a = firstFourth( 0 = 15 );
// let b = secondFourth( 16-30 );
// let c = thirdFourth( 31-45 );
// let d = fourFourth( 46-60 );
