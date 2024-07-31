console.log("assinging random colors to boxes using DOM")


function RandomColor() {
   let r = parseInt(Math.random()*255)
   let g = parseInt(Math.random()*255)
   let b = parseInt(Math.random()*255)
   return `rgb(${r}, ${g}, ${b})`
}

console.log(RandomColor())




let a = setInterval(() => {
    document.querySelectorAll(".box").forEach(element => {
        element.style.backgroundColor = `${RandomColor()}`
    });
}, 500);

