// changeColor function that is activated when clicked on the button

function changeColor () {

    // array of hex code characters
    let hexNumbers = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
        'A', 'B', 'C', 'D', 'E', 'F'
    ];

    // empty string for the hexcode
    let hexCode = ''

    //iterate 5 times to get 5 unique characters
    for (let i = 0; i < 6; i++) {

        //generates a random index 5 times
        let randomIndex = Math.floor(Math.random() * hexNumbers.length)
        console.log(randomIndex)

        //adds index value from hexNumbers into the empty hexcode string
        hexCode += hexNumbers[randomIndex]
    }

    //changes the hex-code value into the new value created 
    document.getElementById("hex-code").innerHTML = hexCode

    //change background color to reflect new color
    document.getElementsByTagName("body")[0].style.background = "#" + hexCode

}