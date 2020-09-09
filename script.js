// PROMISE BASICS
let checker = true;
let p = new Promise((resolve, reject) => {
    if(checker){
        resolve('Success: resolve stage')
    } else{
        reject('Failed: reject stage')
    }
})
p.then((message)=>{
    console.log('This is in the ' + message)
}).catch((message) =>{
    console.log('This is in the catch ' + message)
})
// FETCH WITH PROMISE

// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'User 1'
//     })
// })
//     .then(res => {
//         if(res.ok){
//             console.log('we good')
//             return res.json();
//         } else{
//             console.log("we ain't good");
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))


// ARROW FUNCTION REFACTOR

// function sum(a, b){
//     return a+b;
// }
// let sum1 = (a, b) => { return a+b}

// let sum2 = (a,b) => a+b;

// function isPositive(num){
//     return num >=0
// }

// let isPositive1 = num => num >=0;

// function randomNum(){
//     return Math.round(Math.random() * (100 - 1) + 1);
// }

// // Return is ommitted if no brackets, required with brackets after arrow
// let randomNum1 = () => { return Math.round(Math.random() * (100 - 1) + 1)}