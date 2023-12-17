// event listener to click on eraser icon and remove entire list
document.querySelector("#eraser").addEventListener("click", () => {
    document.querySelector("#groceryItems").textContent = ""; //remove all items to be empty
})
  
// event listener for ENTER button, will run addItem() on ENTER only
document.querySelector("#userInput").addEventListener("keydown", (event) => {
    if(event.key == "Enter")
      addItem();
});
  
// addItem function
addItem = () => {
    const item = document.createElement("h2") //create a heading element
    // inside h2 element, add dash and value that user enters
    item.textContent = "- " + document.querySelector("#userInput").value;
  
    // event listener for list items to add/remove dash
    item.addEventListener("click", () => {
      if(item.style.textDecoration != "line-through"){ // if item has no dash
        item.style.textDecoration = "line-through"; // add style for dash
      }else{ // if item has a dash
        item.style.textDecoration = "none"; // remove dash styling
      }
    })
  
    // append h2 element with user value into list area
    document.querySelector("#groceryItems").appendChild(item);
    // empty the input area
    document.querySelector("#userInput").value = "";
}