// push,peek,pop

class Node{
    constructor(value){
        this.value=value  
        this.next=null;

    }
}
class Stack{
    constructor(){
        this.top=null,
        this.bottom=null,
        this.length=0;
    }
    peek(){
    
        return this.top;
    }
    push(value){
        const newNode=new Node(value)
        if(this.length===0){
            this.top=newNode;
            this.bottom=newNode;
           
        }
        else
        {
            const holdingPointer=this.top;
            this.top=newNode;
            this.top.next=holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.top==this.bottom){
            this.bottom=null;
        }
        this.top=this.top.next;
        this.length--;
        return this;
    }
}
const myStack= new Stack();
myStack.push("google")
myStack.push("udemy")
myStack.push("youtube")
myStack.peek();
console.log(myStack)
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack)