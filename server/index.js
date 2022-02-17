const express = require('express')

const app = express()
const port = 3000

app.get('/', (req , res) => {
  res.send('You are on homepage')
})
.get('/contact' , (req, res) => {
    res.send({
      email : "yashghatge123@gmail.com",
       name : "yash"


    });
    })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})