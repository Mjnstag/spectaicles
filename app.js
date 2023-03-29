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

app.get('/distance', (req, res) => {
  res.render('./pages/distance')
})

app.get('/webcam3', (req, res) => {
  res.render('./pages/webcam3')
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

/* Mobile Onboarding */
app.get('/mobile/onboard_1', (req, res) => {
  res.render('./pages/mobile/onboard/onboard_1')
})

app.get('/mobile/onboard_2', (req, res) => {
  res.render('./pages/mobile/onboard/onboard_2')
})

app.get('/mobile/onboard_3', (req, res) => {
  res.render('./pages/mobile/onboard/onboard_3')
})

app.get('/mobile/onboard_4', (req, res) => {
  res.render('./pages/mobile/onboard/onboard_4')
})

app.get('/mobile/onboard_5', (req, res) => {
  res.render('./pages/mobile/onboard/onboard_5')
})

/* Mobile Menu */

app.get('/mobile/menu_1', (req, res) => {
  res.render('./pages/mobile/test_menu/menu_1')
})

app.get('/mobile/menu_2', (req, res) => {
  res.render('./pages/mobile/test_menu/menu_2')
})

app.get('/mobile/menu_3', (req, res) => {
  res.render('./pages/mobile/test_menu/menu_3')
})

app.get('/mobile/menu_complete', (req, res) => {
  res.render('./pages/mobile/test_menu/completed_menu')
})

app.get('/mobile/report', (req, res) => {
  res.render('./pages/mobile/test_menu/report')
})

/* Mobile Test Pages */

app.get('/mobile/test_1', (req, res) => {
  res.render('./pages/mobile/test_pages/test_1_c16')
})

app.get('/mobile/test_2', (req, res) => {
  res.render('./pages/mobile/test_pages/test_2_c17')
})

app.get('/mobile/test_3', (req, res) => {
  res.render('./pages/mobile/test_pages/test_3_c18')
})

app.get('/mobile/test_4', (req, res) => {
  res.render('./pages/mobile/test_pages/test_4_c20')
})

app.get('/mobile/test_5', (req, res) => {
  res.render('./pages/mobile/test_pages/test_5_c21')
})

app.get('/mobile/test_6', (req, res) => {
  res.render('./pages/mobile/test_pages/test_6_c22')
})

app.get('/mobile/turn_right', (req, res) => {
  res.render('./pages/mobile/test_pages/turn_right')
})

app.get('/mobile/test_7', (req, res) => {
  res.render('./pages/mobile/test_pages/test_7_c24')
})

app.get('/mobile/test_8', (req, res) => {
  res.render('./pages/mobile/test_pages/test_8_c25')
})

app.get('/mobile/test_9', (req, res) => {
  res.render('./pages/mobile/test_pages/test_9_c26')
})

app.get('/mobile/test_10', (req, res) => {
  res.render('./pages/mobile/test_pages/test_10_c27')
})

app.get('/mobile/test_result', (req, res) => {
  res.render('./pages/mobile/test_pages/test_result_c28')
})


/* Start the server */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})