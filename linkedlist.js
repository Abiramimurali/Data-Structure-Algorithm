// append-> 10 -->5 -->16
//prepend-> 11 -->10 -->5 -->16

class linkedlist{
    constructor(val){
        this.head={
            value:val,
            next:null
        }
        this.tail=this.head
        this.length=1
    }
    //append -> 10 --> 5 --> 16
    append(value){
        const newNode={
            value: value,
            next:null 
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this;
    }
    //prepend-> 11 -->10 -->5 -->16
    perpend(value){
        const newNode={
            value: value,
            next:null 
        }
        
        newNode.next=this.head
        this.head=newNode
        this.length++
        return this;
    }
    printList(){
        const array=[];
            let currentNode=this.head;
            while(currentNode!==null){
                array.push(currentNode.value)
                currentNode=currentNode.next;
            }
        
           return array;}
        
        insert(index,value){
        if(index>=this.length){
           return this.append(value) 
        }
        const newNode={
            value: value,
            next:null
        };
        const leader=this.traverseToIndex(index-1)
        const holdingPointer=leader.next;
        leader.next=newNode;
        newNode.next=holdingPointer;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index){
        let counter=0;
        let currentNode=this.head;
        while(counter!==index){
            currentNode=currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index){
        const leader=this.traverseToIndex(index-1)
        const unwantedNode=leader.next;
        leader.next=unwantedNode.next;
        this.length--;
        return this.printList();
    }
    }
const mylinkedlist=new linkedlist(10)
mylinkedlist.append(5)
mylinkedlist.append(15)
mylinkedlist.perpend(11)
mylinkedlist.insert(1,99)
mylinkedlist.insert(200,100)
mylinkedlist.printList()
mylinkedlist.remove(1)
console.log(mylinkedlist)
