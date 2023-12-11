// generate function creates a new quote each click

function generate() {

    //using quote generating API
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json(); //converts GET into .json
  })
  .then(function(data) {
    // randomly picks a number based on the length of data
    let randomIndex = Math.floor(Math.random() * data.length)

    let quote = data[randomIndex].text //grabs quote from data
    let author = data[randomIndex].author //grabs author from the data

    console.log(data[randomIndex]); //console log the data to verify

    document.getElementById("quote").innerHTML = quote //update quote DOM
    document.getElementById("author").innerHTML = author //update author DOM
  });

}