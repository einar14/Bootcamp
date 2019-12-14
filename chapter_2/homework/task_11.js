let email = prompt('Введите вашу почту');

function validateEmail (email) {
    var re = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/i;
    return re.test(email);
}
console.log(validateEmail(email))