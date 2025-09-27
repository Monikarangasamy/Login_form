const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { findUserByUsername, findUserForLogin, createNewUser } = require('./database.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await findUserByUsername(username);

  if (existingUser) {
    return res.send('Username already exists!');
  }

  await createNewUser(username, password);
  res.send('Signup successful. You can now login.');
});

app.post('/index', async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserForLogin(username, password);

  if (user) {
    return res.send(`Login successful, Welcome ${username}`);
  }
  res.send('Invalid username or password!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});