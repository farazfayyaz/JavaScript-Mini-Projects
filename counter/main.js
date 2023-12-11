//initialize counter value to 0
let count = 0

//increase function
function increase() {

    count ++ //increment counter value
    document.getElementById("count").innerHTML = count //display new value

}

//decrease function
function decrease() {

    count -- //decrement counter value
    document.getElementById("count").innerHTML = count //display new value

}