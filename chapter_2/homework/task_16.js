function hoursToSec (hours) {
    if (isNaN(hours)) {
        return alert('Введите цифру')
    }else  {
        hours *= 60 * 60;
        return hours                
    }
    
}
let hours = prompt('Введите часы');
console.log(hoursToSec(hours));