const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// I've embedded the json for now, then handle SoC later
const comments = [
  {
    username: 'Luis',
    comment: 'The goal is to be better than yesterday.'
  },
  {
    username: 'Joshua',
    comment: 'Never stop learning!'
  },
  {
    username: 'Marian',
    comment: `What you went through has a purpose. So does your life. Focus on your life's purpose, and you will get through this trying time!`
  },
  {
    username: 'Roowell',
    comment: `Contained by the heavens, but living in me.`
  }
];

app.get('/comments',(req,res) => {
  res.render('index', { comments });
})

// this is the route where new comments go
app.get('/comments/new',(req,res) => {
  res.render('new');
})

// after succesful form submission, the new comment along with the username is pushed
app.post('/comments',(req,res) => {
  const { username, comment} = req.body;
  comments.push({ username, comment});
  res.redirect('/comments');
})

app.listen(3000, () => {
  console.log('Listening to port 3000');
})