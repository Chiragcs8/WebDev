import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is Ready');
});

const post = process.env.PORT || 3000;

app.listen(post, () => {
  console.log(`Server at http://localhost:${post}`);
});