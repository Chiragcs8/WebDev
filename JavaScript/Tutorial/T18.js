console.log("Learning DOM in depth(deep)");

// console.log(document.links(2))
// console.log(document.baseURI)

// document.getElementById('firstHeading')
// <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​
// document.getElementById('firstHeading').innerHTML = "<h1>Saber of Xebec</h1>"
// '<h1>Saber of Xebec</h1>'

document.getElementById("title").getAttribute

document.getElementById("title").getAttribute('id')

document.getElementById("title").getAttribute('class')

document.getElementById("title").className

document.getElementById("title").id

document.getElementById("title").setAttribute('class','test')

const title = document.getElementById('title')

title

title.style.backgroundColor = 'gray'

title.style.padding = "15px"

title.style.borderRadius = "15px"

title.innerText

title.innerHTML

title.textContent

document.querySelector('.heading')

document.querySelector('#title')

document.querySelector('h1')

document.querySelector('input[type = "password"]')

document.querySelector('p:first-child')

document.querySelector('div:first-child')

document.querySelector('div:nth-child(1)')

document.querySelector('ul')

const myul = document.querySelector('ul')

myul.querySelector

myul.querySelector('li')

const turngreen = myul.querySelector('li')

turngreen.style.backgroundColor = 'gray'

turngreen.style.padding = "10px"

turngreen.innerText

turngreen.innerText = 'five'

document.querySelectorAll

document.querySelectorAll('li')

const templist = document.querySelectorAll('li')

templist

const myarr = [1, 2, 3, 4, 5]

myarr

templist[0].style.color = 'green'

templist[2].style.color = 'green'

templist[1].style.color = 'green'

const myh1 = document.querySelectorAll('h1')

myh1

myh1[0].style.color = 'green'

myh1[0].style.color = 'red'

templist[0].style.color = 'black'

templist[0].style.color = 'white'

templist.forEach(function (l) {
    l.style.backgroundColor = 'red'
})

templist.forEach(function (l) {
    l.style.backgroundColor = 'white'
})

templist.forEach(function (l) {
    l.style.backgroundColor = 'black'
})

document.getElementsByClassName('')

document.getElementsByClassName('list-item')

const tempclasslist = document.getElementsByClassName('list-item')

Array.from(tempclasslist)

const myconvertedarr = Array.from(tempclasslist)

myconvertedarr.forEach(function(li){
    li.style.color = 'orange'
})
