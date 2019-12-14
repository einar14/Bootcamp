function checkNum(n) {  
    if(n == '') return;
    if (n <=1 ) return n;
    return checkNum(n-1)+","+n;
}

console.log(checkNum(-10))