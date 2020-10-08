// iterative method

function findFactorialIterative(n){
let answer=1;
if(n===2||n==1){
    return answer;
}
for(let i=2; i<=n;i++){
answer*=i
}
return answer
}
console.log(findFactorialIterative(5));

//recursive method

function findFactorialRecursion(n){
    if(n===2){
        return 2;
    }
    return n*findFactorialRecursion(n-1)
}
console.log(findFactorialRecursion(5))