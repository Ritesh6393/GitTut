console.log('Person1:shows ticket');
console.log('Person2:shows ticket');

const preMovie=async ()=>{
    const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })

    const getPopcorn=new Promise((resolve,reject)=>{
        resolve('Popcorn');
    })

    const getButter=new Promise((resolve,reject)=>{
        resolve('butter')
    })

    const getColdDrinks=new Promise((resolve,reject)=>{
        resolve('pepsi')
    })
    let ticket=await promiseWifeBringingTicket;

    console.log('wife:i have the tics');
    console.log('husband:we should go in');
    console.log('wife:no i am hungry')

    let Popcorn=await getPopcorn;

    console.log(`husband:i got some ${Popcorn}`);
    console.log('husband:we should go in');
    console.log('wife:I need butter on my popcorn');
    
    let butter=await getButter;
    console.log(`husband:i got some ${butter}`);
    console.log('husband:we should go in');
    console.log('wife:I am thirsty');

    let colddrink=await getColdDrinks;
    console.log(`husband:i got  ${colddrink}`);
    console.log('husband:we should go in');
    console.log('wife:yes we should otherwise we will be late');
    console.log('husband:thanks,for reminder');

    return ticket;
}
preMovie().then((t)=>{
    console.log(`Person3:shows ${t}`);
})
console.log('Person4:shows ticket');
console.log('Person5:shows ticket');