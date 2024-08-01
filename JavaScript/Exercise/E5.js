function createcard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    if(views<100000){
        viewStr = views/1000 +"K"
    }
    else if(views>100000){
        viewStr = views/1000000 +"M"
    }
    else{
        viewStr = views
    }

  let html = `      
    <div class="card">
        <div class="image">
          <img
            src="${thumbnail}"
          />
          <div class="Duration">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}
          </h1>
          <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
        </div>
      </div>
      `;

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createcard("Xebec video #1", "Sabre of Xebec", 56000000, 7, "17:32", "https://www.google.com/logos/doodles/2024/paris-games-artistic-gymnastics-6753651837110525-la202124.gif")


createcard("Xebec video #2", "Sabre of Xebec", 56000000, 7, "17:37", "https://www.google.com/logos/doodles/2024/paris-games-artistic-gymnastics-6753651837110525-la202124.gif")


createcard("Xebec video #3", "Sabre of Xebec", 56000000, 7, "17:34", "https://www.google.com/logos/doodles/2024/paris-games-artistic-gymnastics-6753651837110525-la202124.gif")

