console.log("This tutorial about callback");

console.log("Xebec is a hacker");
console.log("Harry is a hecker");

setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

console.log("The end");

const finn = () => {
    console.log("I am finn");
}

const callback = (arg, finn) => {
    console.log(arg);
    finn();
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Xebec", finn)
    document.head.appendChild(sc);
    
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)


