console.log('Person1:shows ticket');
console.log('Person2:shows ticket');

const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve('ticket');
     },3000) 
})

const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife:no im hungry go get som popcorn')
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    })

})
const getButter=getPopcorn.then((t)=>{
    console.log('husband:we should go');
    console.log('wife:no i need butter on my popcorn');
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`);
    })
})
const getColdDrinks=getButter.then((t)=>{
     console.log('husaband:we should go now');
     console.log('wife:no ima thirsty');
     return new Promise((resolve,reject)=>{
         resolve('colddrinks')
     });
})
getColdDrinks.then((t)=>{
    console.log('wife:now we should go otherwise we will be late');
    console.log('husband:thanks for reminder');
    console.log(t);
})

console.log('Person4:shows ticket');
console.log('Person5:shows ticket');