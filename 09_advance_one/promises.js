const promiseOne =  new Promise(function(resolve,reject){
    // do an async task
    // Db calls , cryptography, network

    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    })
}).then(function(){
    console.log("Async 2 resolved");
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false;
        if(!error){
            resolve({username:"prince",password:"123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },2000)
})
promisefour.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

const promiseFive =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"prince singh",password:"123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumepromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumepromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/prince2312');
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}

fetch('https://api.github.com/users/prince2312')
.then((response)=>{
    return response.json()
}).then((data) => {
    console.log("data");
})
.cathc((error) => console.log(error))