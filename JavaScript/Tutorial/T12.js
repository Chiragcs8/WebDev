console.log("learning about button")

let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked </b> Enjoy your clicked!"
    })


button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us Right click PLease")
    })


document.addEventListener("keydown", (e)=>{
    console.log(e, e.key)
    })

document.querySelector(".child").addEventListener("contextmenu",(e)=>{
    e.stopPropagation()
    alert("Child was clicked")
})

document.querySelector(".childContainer").addEventListener("contextmenu",(e)=>{
    e.stopPropagation()
    alert("ChildContainer was clicked")
})

document.querySelector(".childContainer").addEventListener("contextmenu",(e)=>{
    alert("Container was clicked")
})

function RandomColor() {
    let r = parseInt(Math.random()*255)
    let g = parseInt(Math.random()*255)
    let b = parseInt(Math.random()*255)
    return `rgb(${r}, ${g}, ${b})`
 }
 
 

// let a = setInterval(() => {
//     document.querySelector(".child").style.background = RandomColor()
// }, 500);

let a = setTimeout(() => {
    document.querySelector(".child").style.background = RandomColor()
}, 5000);

console.log(a)