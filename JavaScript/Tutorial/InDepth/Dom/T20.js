function language(langname) {
    const li = document.createElement('li')
    li.innerHTML = `${langname}`
    document.querySelector('.language').appendChild(li)
}

language("python")
language("ruby")
language("java")

function addoptiland(langname) {
    const li = document.createElement("li")
    // const addtext = document.createTextNode(langname)
    li.appendChild(document.createTextNode(langname))
    document.querySelector('.language').appendChild(li)
}
addoptiland('golang')

// Edit

const secondlang = document.querySelector("li:nth-child(2)")
// secondlang.innerHTML = "Mojo"

const newli = document.createElement('li')
newli.textContent = "Mojo"
secondlang.replaceWith(newli)

// Edit
const firstlang = document.querySelector("li:first-child")
firstlang.outerHTML = '<li>TypeScript</li>'

// remove
const lastlang = document.querySelector("li:last-child")
lastlang.remove()



