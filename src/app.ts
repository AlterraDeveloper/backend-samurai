import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
.get("/ts", (req, res) => {
  res.send("Get started Typescript");
})
.get("/js", (req, res) => {
  res.send("Continue with JavaScript")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})