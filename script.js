let input = document.querySelector("input")


function evalute(event){
    input.value += event
}


function removeAll(){
    input.value=""
}

function lastRemove(){
    input.value = input.value.slice(0,input.value.length-1)
}

function Evall(){
    input.value = eval(input.value)
}