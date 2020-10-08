 function selectionSort(a){
    const l=a.length;
    for(let i=0; i<l; i++){
        let min=i;
        let temp=a[i];
        for(let j=i+1; j<l; j++){
            if(a[j]<a[min]){
                min=j;
            }
        }
            a[i]=a[min];
            a[min]=temp;

    }
    return a;
}
const n=[99,22,4,3,56,789,0]
selectionSort(n)
console.log(n)
