calculateTime = () => {

    let date = new Date(); //generate today's date

    let dayNum = date.getDay(); //get date
    let hour = date.getHours() //current hour
    let minute = date.getMinutes() // cirrent minute
    let ampm = hour >= 12 ? 'PM' : 'AM' //check AM or PM
    let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] //days of the week

    hour = hour % 12
    hour = hour ? hour : '12'
    minute = minute < 10 ? '0' + minute : minute

    document.querySelector("#day").textContent = dayNames[dayNum]; //display day
    document.querySelector("#hour").textContent = hour; //display hour
    document.querySelector("#minute").textContent = minute; //display minute
    document.querySelector("#ampm").textContent = ampm; //display AM or PM

    setTimeout(calculateTime, 200);

}

window.addEventListener('load', calculateTime) //on load, run function