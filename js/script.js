var button = document.querySelector(".btn_chang_col")
var div = document.querySelector(".color")
var colors = ["red", "green", "blue"]

var i = 0
button.onclick = function() {
    //logic
    div.style.backgroundColor = colors[i]
    i++
    if (i == 3) {
        i = 0
    }
}