function fibonachi(n){
    if(n<=1){
        return n;
    } else {
        return fibonachi(n-1) + fibonachi(n-2);
    }
}

function fibo(n){
    return n<=1 ? n : fibo(n-1) + fibo(n-2)
}
let num = prompt("введите число от 1 до 14")
alert(fibo(num))
/*
n=2
n<=1 --- false
else
return 
    fibonacci(n-1)                      +                        fibonacci(n-2)
    n<=1 ----- true                                              n<=1 ------ true
    return n /// 1                                               return n /////0


    +
 
    fibonacci(n-1)
    n<=1 ----- true
    return n /// 1

*/