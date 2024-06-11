//promise created
//bluebird study both this thing
const promiseOne = new Promise( (resolve, reject)=>{
    //Do an async task
    // DataBase calss, cryptography, netwirk
    setTimeout(function(){
        console.log('Async task is complete'); 
     resolve();//here you connect the resolve function than run both and pass  the value under the resolve
    }, 1000)
})
promiseOne.then(function(){//study about then and many other thing under it 
    console.log('Promise one is resolved');
})
//promiseTwo
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is complete');
        resolve();
}, 1000)
}).then(function(){
    console.log('Promise two is resolved');
    })
    //promise3
    const promiseThree= new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username:"vikas",email:"vikas@gmail.com"})
    },1000)
    })
    promiseThree.then(function(user){
        console.log(user);
    })
    //promise4
     const promiseFour = new Promise(function(resolve,reject){
        setTimeout(() => {
            let error = true
            if(!error){
                resolve({username:"vikas",password:"123"})
            }else{
                reject('Something went wrong')
            }
        }, 1000);
     })
     promiseFour.then(function(user){
        console.log(user);
        return user.username
     }).then((username)=>{
       console.log(username);
     })//this is called a chaning
     .catch((error)=>{//catch use for error
        console.log(error);
     }).finally(()=> console.log("the promise is either resolved or rejected"))//finally is as you can say it is a default statment

     //promise5
     const promiseFive = new Promise(function(resolve,reject){
        setTimeout(() => {
            let error = true
            if(!error){
                resolve({username:"js",password:"123"})
            }else{
                reject('js went wrong')
            }
        }, 1000);
     })
      //here you can use a aync await also usin g a try catch method
      async function consumePromiseFive(){
       
        try{
            const reponse = await promiseFive
            console.log(reponse);
      }
      catch(error){
        console.log(error);
      }
    }
consumePromiseFive()
 //both method is correct 
    //lets try a api 
    // async function getAllUser(){
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    //     const data = await response.json()
    //     console.log(data);
    //     } catch (error) {
    //         console.log("E:", e);
    //     }
    // }
    // getAllUser()
    //nowthen method
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')//fetch is a promise
    .then((response)=>{
        return response.json()
    }).then((data)=>console.log(data))
    .catch(()=>console.log("error"))
