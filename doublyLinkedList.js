// append-> 10 -->5 -->16
//prepend-> 11 -->10 -->5 -->16

class Doublylinkedlist{
    constructor(val){
        this.head={
            value:val,
            next:null,
            prev:null
        }
        this.tail=this.head
        this.length=1
    }
    //append -> 10 --> 5 --> 16
    append(value){
        const newNode={
            value: value,
            next:null,
            prev:null 
        }
        newNode.prev=this.tail;
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this;
    }
    //prepend-> 11 -->10 -->5 -->16
    perpend(value){
        const newNode={
            value: value,
            next:null ,
            prev:null
        }
        newNode.next=this.head
        this.head.prev=newNode;
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
            next:null,
            prev: null
        };
        const leader=this.traverseToIndex(index-1)
        const follower=leader.next;
        leader.next=newNode;
        newNode.prev=leader;
        newNode.next=follower;
        follower.prev=newNode;
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
    reverse(){
        if(!this.head.next)//!null
        {
            return this.head;
        }
        let first=this.head;
        this.tail=this.head
        let sec=first.next;
        while(sec){
            const temp=sec.next
            sec.next=first;
            first=sec;
            sec=temp;
         }
         this.head.next=null;
         this.head=first;
         return this

    }
    }
const mylinkedlist=new Doublylinkedlist(10)
mylinkedlist.append(5)
mylinkedlist.append(16)
mylinkedlist.perpend(11)
mylinkedlist.insert(1,99)
mylinkedlist.insert(200,100)
mylinkedlist.printList()
mylinkedlist.remove(1)
mylinkedlist.reverse()
console.log(mylinkedlist)
