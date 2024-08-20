const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Its my server')
})

app.get('/youtube', (req, res) => {
  res.send('Its my City')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})