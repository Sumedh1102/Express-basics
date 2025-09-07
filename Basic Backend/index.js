require('dotenv').config()

// Importing the Express framework
const express = require('express')

// Creating an Express application
const app = express()

// Defining the port number where the server will run
const port = 4000

// Default route (Home page)
// When user visits http://localhost:3000/
// It will respond with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Twitter route
// When user visits http://localhost:3000/twitter
// It will respond with your Twitter handle
app.get('/twitter', (req, res) => {
  res.send('@sumedh1102')
})

// Login route
// When user visits http://localhost:3000/login
// It will respond with a login message in HTML format
app.get('/login', (req, res) => {
  res.send('<h1>please login at the GDG Mumbai Google Dev Group Mumbai</h1>')
})

// YouTube route
// When user visits http://localhost:3000/youtube
// It will respond with a heading suggesting to visit GDG Mumbai’s YouTube page
app.get('/youtube', (req, res) => {
  res.send('<h2>Visit GDG Mumbai official YouTube page</h2>')
})

// Starting the server
// app.listen() tells the app to listen on the defined port (3000)
// Once the server starts, it will log a message in the console
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
