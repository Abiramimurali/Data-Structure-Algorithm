

function fibonacciRecursive(n) {
    if (n < 2){
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
  }
  
  console.log(fibonacciRecursive(8))


  function fibonacciIterative(n){
      let a=[0,1];
      for(let i=2; i<=n; i++){
          a.push(a[i-1]+a[i-2]);
      }
      return a[n]

  }
  console.log(fibonacciIterative())