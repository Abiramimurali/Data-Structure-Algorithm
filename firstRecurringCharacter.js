// //Method-1 => using Nested loop -> very simple but not efficient bcz o(n^2)

function firstRecurringchar(input)
{
    for(let i=0; i<input.length; i++)
    {for(let j=i+1; j<input.length; j++)
        {
         if(input[i]===input[j])
         {
             return input[i];
         }

    }}
    return undefined
}



// Method-2 => using Hash Table

function firstRecurringchar2(input){
let map={};

for(let i=0; i<input.length; i++)
{
    if(map[input[i]]!=undefined){
        console.log(input[i])
    return input[i];
}

else{
    map[input[i]]=i;
}
console.log(map)}

return undefined;
}

let array=[2,5,5,2,3,5,1,2,4]
console.log(firstRecurringchar2(array))