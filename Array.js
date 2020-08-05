

const str=['a','b','c','d','e']
//4*5=20 byte of storage

//1) push -> it just add element @ end of the array
str.push('f') // -> o(1) in dynamic array o(1) or o(n)
console.log(str)
//2) pop -> it just remove element @ end of the array
str.pop()  // -> o(1)
console.log(str)
//3) unshift -> it add a element @ beginning of the array 
str.unshift('1') // -> o(n)
console.log(str) 
//4) splice -> it add/remove a element in middle of the array
str.splice(1,0,'2') // o(n/2)
console.log(str)
