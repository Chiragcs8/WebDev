import express from "express";

const app = express();

app.use(express.static("dist"));

// app.get('/', (req, res) => {
//   res.send('Server is Ready');
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "Why did the chicken cross the road? To get to the other side.",
    },
    {
      id: 2,
      title: "Another joke",
      content: "Why did the cat cross the road? To get to the other side.",
    },
    {
      id: 3,
      title: "A third joke",
      content: "Why did the dog cross the road? To get to the other side.",
    },
    {
      id: 4,
      title: "A fourth joke",
      content: "Why did the mouse cross the road? To get to the other side.",
    },
    {
      id: 5,
      title: "A fifth joke",
      content: "Why did the elephant cross the road? To get to the other side.",
    },
  ];
  res.send(jokes);
});

const post = process.env.PORT || 3000;

app.listen(post, () => {
  console.log(`Server at http://localhost:${post}`);
});
