const express = require('express')
var cors = require('cors')
const connectToMongo=require('./db');


connectToMongo();
const app = express()
const port = process.env.PORT || 5000;



app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello Deepak!')
// })

// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

//3:step heroku
if(process.env.NODE_ENV==="production"){
  app.use(express.static("build"));
  const path = require("path");
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

app.listen(port, () => {
  console.log(`dailyNotes backend listening at http://localhost:${port}`)
})


