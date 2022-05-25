// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/bread_controller.js')
  app.use('/breads', breadsController)
  