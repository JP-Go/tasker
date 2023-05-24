import express from "express";

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('dist'))


app.listen(3000, () => {
  console.log("Tasker running on port 3000")
})
