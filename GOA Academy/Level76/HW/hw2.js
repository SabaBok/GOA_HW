let head = document.getElementsByTagName("h1")
let counter = 0

function mather(numb){
    counter += numb
    head[0].innerHTML = counter
    changeColor()
}
function reset(){
    head[0].innerHTML = 0
    counter = 0
    changeColor()
}
function changeColor(){
    if(counter < 0){
        head[0].style.color = "red"
    }else if(counter > 0){
        head[0].style.color = "green"
    }else if(counter == 0){
        head[0].style.color = "#000"
    }
}