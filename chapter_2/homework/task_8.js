function cels(n) {
    let i = (1.8 * n) + 32;
    return i;
}
let num = +prompt('Введите Цельсий?')
alert(cels(num));