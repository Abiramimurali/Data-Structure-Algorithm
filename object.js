//Reference type 

var obj1={val: 10}
var obj2=obj1
var obj3={value:10}
console.log(obj1==obj2)
console.log(obj1==obj3)
obj1.val=15
console.log(obj2,obj1,obj3)
 
// Context vs scope
//scope
function variable(){
    let a="a";
}
//console.log(a) // scope -bcz a is not in this scope.

// context
console.log(this)
console.log(this===window)
this.alert("welcome")

const obj4={
    a:function(){
        console.log(this);
    }
}
