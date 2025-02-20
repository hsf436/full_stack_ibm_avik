document.getElementById("parent").style.backgroundColor="blue"
document.getElementById("parent").style.border="1px solid black"
document.getElementById("parent").style.height="100px"
document.getElementById("parent").style.width="80%"

let element = document.createElement("button")
element.innerText="submit"
element.style.backgroundColor="gray"
element.style.padding="10px"
document.getElementById("parent").append(element)

const num=10;
console.log(num)

num=15
console.log(num)

function myfunction(){
    console.log(num)
}

myfunction()