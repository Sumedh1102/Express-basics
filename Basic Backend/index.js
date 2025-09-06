const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
  res.send('@sumedh1102')
})


app.get('/login', (req, res) => {
  res.send('<h1>please login at the GDG mumbai Google dev Group Mumbai</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
