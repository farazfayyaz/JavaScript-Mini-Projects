//submit function that handles the generation of the message

function submit() {

    //selects the value from the input box
    let message = document.getElementById("message-input").value

    console.log(message) //log message to verify

    //displays message onto the screen
    document.getElementById("message-output").innerHTML = message

}