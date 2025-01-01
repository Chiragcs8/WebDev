require("dotenv").config();
const express = require("express");

const app = express();

const port = 5000;

const githubData = 
{
  "login": "Chiragcs8",
  "id": 176170009,
  "node_id": "U_kgDOCoAkGQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/176170009?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Chiragcs8",
  "html_url": "https://github.com/Chiragcs8",
  "followers_url": "https://api.github.com/users/Chiragcs8/followers",
  "following_url": "https://api.github.com/users/Chiragcs8/following{/other_user}",
  "gists_url": "https://api.github.com/users/Chiragcs8/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Chiragcs8/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Chiragcs8/subscriptions",
  "organizations_url": "https://api.github.com/users/Chiragcs8/orgs",
  "repos_url": "https://api.github.com/users/Chiragcs8/repos",
  "events_url": "https://api.github.com/users/Chiragcs8/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Chiragcs8/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2024-07-20T18:05:48Z",
  "updated_at": "2024-12-11T12:26:28Z"
} 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Xebecdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1> Welcome! please login at Saber of Xebec </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Xebec's YouTube</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
