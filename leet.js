
//leet question 1

var createCounter = function(n) {
  let count=n
      return function() {
          return n++
      };
  };
  
//leet question 2

let arr = [1,2,3]
let filter=function(arr,f){
        let dub=[]
        for (let i=0;i<arr.length;i++){
            if(f(arr[i],i)){
                dub.push(arr[i])  
            }
        }
        return dub
    }
let newarr=filter(arr,function firstIndex(n, i) { return i === 0; })
console.log(newarr)

//leet question 3


let narr=function(ar,fn){
    let nli=ar.map(fn)
    return nli
}
let ar=[1,2,3]
let newList=narr(ar,function plusone(n) { return n + 1; })
console.log(newList)

//leet question 3


function bj(obj){
  if (Object.keys(obj).length===0||obj.length===0){
    return true
  }
  return false
}
obj = [4,2]

console.log(bj(obj))

//leet code 4

var map = function(arr, fn) {
  let dub=[]
    for (let i=0;i<arr.length;i++){
        dub.push(fn(arr[i],i))
    }
    return dub
};


//leet Question 
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

var expect = function(val) {
   return{
     toBe:function(value){
    if(val===value){
        return true;
    }
    else if(val!==null ){
     throw new Error ("Not Equal");
    }
    else{
             throw new Error ("Not Equal");

    }
   },
    notToBe:function(value){
  if(val!== value ){
        return true;
    }
    else{
        throw new Error("Equal")
    }
   }
}
};

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  return{
    a:init,
    inc:function(){
        this.a=this.a+1
    },
    increment:function(){
        this.inc()
        return this.a
    },
    res:function(){
        this.a=init
    },
    reset:function(){
        this.res()
        return this.a
    },
    dec:function(){
        this.a=this.a-1
    },
    decrement:function(){
        this.dec()
        return this.a
    },
    
  }
  
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */