const numbers=[99,44,6,2,1,5,63,87,283,4,0]
function bubbleSort(a){
    const len=a.length-1;
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(a[j]>a[j+1]){
                let temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
}


bubbleSort(numbers)
console.log(numbers)