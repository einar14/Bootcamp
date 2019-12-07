const words = [
    'javascript',
    'object',
    'python',
    'task',
    'makers'
]

let word = words[Math.floor(Math.random() * words.length)]

let answerArr = word.split('').map(function(item){
    return '_'
})
let remaningLetters = word.length;

while(remaningLetters > 0){
    let guess = prompt('Угадайте букву, или отмену чтобы выйдти с игры \n' + answerArr.join()).toLowerCase();
    console.log(guess)
    if(guess === '')continue;
    if(guess === null )break;

    if(guess.length !==1){
        alert('Пожалуйста, введите только одну букву.');
        continue;
    }
    let isTrueGuess = false;
    word.split('').map(function(item,index){
        if(guess === item && answerArr[index] === '_'){
            isTrueGuess = true;
            answerArr[index] = guess;
            remaningLetters--;
        }

    }) 
    if(isTrueGuess){
        trueAttempts++;
    }
    attempts++;

}
if(!remaningLetters){
    alert ( 'Ураа!!!, Вы отгодали слово \n' + answerArr.join(''))
    alert('Кол-во попыток:' + attempts);
    alert('Общий счет' + (Math.floot(100/attempts*trueAttempts))
}