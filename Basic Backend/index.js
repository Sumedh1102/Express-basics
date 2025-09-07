const express = require('express')

// Creating an Express application
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
