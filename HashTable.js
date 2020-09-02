class HashTable
{
    constructor(size){
        this.data=new Array(size);
        console.log(this.data);
    }

Hash(key){
    let hash=0;
    //console.log(this.data.length)
    for(let i=0; i<key.length; i++)
    {   
        hash=(hash+key.charCodeAt(i)*i)%this.data.length
        //console.log(key.charCodeAt(i))
        //console.log(hash)
    }

    //console.log(hash)
    return hash;}

set(key,value){
    let address=this.Hash(key);
    //console.log(address)
    //console.log(!this.data[address])
    if(!this.data[address])
    {
        this.data[address]=[];
    }

    this.data[address].push([key,value])
    return console.log(this.data)}

get(key){
    console.log(key)
    let address=this.Hash(key);
    const currentBucket=this.data[address]
    console.log(currentBucket)
    if(currentBucket){
        for(let i=0; i<currentBucket.length; i++)
        {
            if(currentBucket[i][0]===key)
            {  console.log(currentBucket[i][1])
                return currentBucket[i][1];
            }
        }
    }
    return undefined;
}
keys(){
    const keysArray=[];
    for(let i=0; i<this.data.length; i++){
        if(this.data[i]){
            //console.log(this.data[i][0][0])
            keysArray.push(this.data[i][0][0])
           
        }
    }
    console.log(keysArray)
    return keysArray;
}
}
const myHashTable=new HashTable(1000000)
myHashTable.Hash('grapes')
myHashTable.set('grapes',10)
myHashTable.set('apple',910)
myHashTable.get("apple")
myHashTable.keys()