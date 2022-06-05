const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//MONGOOSE
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(
  MONGO_URI, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, 
  () => {
    console.log(`connected to mongo: ${MONGO_URI}`)
  }
)

// DEPENDENCIES
const methodOverride = require('method-override')

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

  // Breads
const breadsController = require('./controllers/bread_controller.js')
app.use('/breads', breadsController)


// 404 Page
app.get('*', (req, res) => {
  res.render('404')
})



  // LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})