const amount = document.querySelector("#amount"); //select amount val
const guests = document.querySelector("#guests"); //select guests num
const quality = document.querySelector("#quality"); //select quality val
const tipAmount = document.querySelector("#tip-amount"); //select display area

calculate = () => {
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2); //calculate tip

  //empty each input
  amount.value = "";
  guests.value = "";
  quality.value = "";

  //check for invalid value for tip
  if(tip === "NaN"){
    tipAmount.textContent = "Tip $0 each";
    showTipAmount();
  }
  else{
    tipAmount.textContent = "Tip $" + tip + " each";
    showTipAmount();
  }
}

//display tip
showTipAmount = () => {
  // Get the snackbar DIV
  var x = document.querySelector("#tip-amount");
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}