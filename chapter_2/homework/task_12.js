let number = prompt('Введите номер телефона');

function validateNumber(number) {
    var re = /(\+\d{1,4}\s)|(\d+\s?)(\d\s?)/;
    var cod=/^\+\d+\s/;
    console.log(re.test(number));
    return number.match(cod);
} 
console.log(validateNumber(number));

// [0-9]{3}[ -][0-9]{3}[ -][0-9]{4} 