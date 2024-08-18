console.log("learning about api")


const requestUrl = 'https://api.github.com/users/chiragcs8'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
// console.log(xhr.readyState)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(typeof data)
        console.log(data)
        console.log(data.Username)
        console.log(data.login)
        console.log(data.avatar_url)
        const url = data.avatar_url
        const username = data.login
        const followers = data.followers
        
    function img (){    const img = document.createElement('img');
        img.src = url;
        img.alt = 'User Avatar';
        img.width = 150;
        
        const apiTag = document.querySelector('.api');
        
        apiTag.appendChild(img);
    }
    img()

    function Username() {
        const textnode = document.createTextNode(username)

        const unameTag = document.querySelector('.uname');
        unameTag.appendChild(textnode);
    }
    Username()


    function Followers() {
        const textnode = document.createTextNode("Followers: " + followers)

        const ftag = document.querySelector('.followers');
        ftag.appendChild(textnode);
    }
    Followers()
    }
}

xhr.send()

