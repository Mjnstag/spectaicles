/* Require libraries */
const express = require('express')
const app = express()
const port = 3000

/* Serve static files */
app.use(express.static('static'))

/* Set the templating engine */
app.set('view engine', 'ejs')

/* Render the routes */
app.get('/', (req, res) => {
  res.render('./pages/index')
})

app.get('/login', (req, res) => {
  res.render('./pages/login')
})

app.get('/signup', (req, res) => {
  res.render('./pages/signup')
})

app.get('/connect', (req, res) => {
  res.render('./pages/connect')
})

app.get('/webcam', (req, res) => {
  res.render('./pages/webcam')
})

app.get('/webcam2', (req, res) => {
  res.render('./pages/webcam2')
})

/* Start the server */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})