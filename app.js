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

/* Test routes */

app.get('/test-device', (req, res) => {
  res.render('./pages/test-device')
})

app.get('/test-bluetooth', (req, res) => {
  res.render('./pages/test-bluetooth')
})

app.get('/test-eye', (req, res) => {
  res.render('./pages/test-eye')
})

app.get('/test-turn', (req, res) => {
  res.render('./pages/test-turn')
})

/* Mobile routes */
app.get('/mobile/login', (req, res) => {
  res.render('./pages/mobile/loginpage')
})

app.get('/mobile/signup', (req, res) => {
  res.render('./pages/mobile/signup_page')
})

app.get('/mobile/forgot', (req, res) => {
  res.render('./pages/mobile/forgot_page')
})

app.get('/mobile/onboard_1', (req, res) => {
  res.render('./pages/mobile/onboard_1')
})

app.get('/mobile/onboard_2', (req, res) => {
  res.render('./pages/mobile/onboard_2')
})

app.get('/mobile/onboard_3', (req, res) => {
  res.render('./pages/mobile/onboard_3')
})

app.get('/mobile/onboard_4', (req, res) => {
  res.render('./pages/mobile/onboard_4')
})

app.get('/mobile/onboard_5', (req, res) => {
  res.render('./pages/mobile/onboard_5')
})



/* Start the server */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})