var num = [1,0,2,3,4,0,0,0,5];

 var zero = num.filter(function(item){
    return item == 0;
 });

 var nulls = num.filter(function(item){
     return item !==0
 });

 var newNum = nulls.concat(zero);

 console.log(newNum);
