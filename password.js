const readline = require('readline');

const reader = readline.createInterface ({
    input:process.stdin,
    output: process.stdout,
})

let welcome = 'Welcome to password validator'

reader.question('Enter password',
function(input){
    if(input.length >= 10){
        console.log('password is perfect')
    } else {
        console.log('Your password is not long enough')
    }
})