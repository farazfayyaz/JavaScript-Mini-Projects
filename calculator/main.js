let userInput = document.querySelector("#user_input") //selects input screen for user input
let expression = "" //empty string for expression


//when user hits a button
function press (val) {

    expression += val //add the pressed value into the expression
    userInput.value = expression //change input value to reflect user input
    console.log(userInput) //console log
    console.log(expression) //console log

}


//when user hits clear
function erase () {

    expression = "" //set expression to empty
    userInput.value = expression //change input screen to empty placeholder
    console.log(userInput) //console log
    console.log(expression) //console log

}


//when user hits equal
function equal () {

    userInput.value = eval(expression) //evaluates the user input expression, displays on screen
    expression = "" //expression clears again
    console.log(userInput) //console log
    console.log(expression) //console log

}