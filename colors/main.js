let index = 0;

function changeColors () {

    let colors = [
        "red",
        "blue",
        "orange",
        "green",
        "yellow",
        "purple"
    ]

    document.getElementsByTagName("body")[0].style.background = colors[index++]

}