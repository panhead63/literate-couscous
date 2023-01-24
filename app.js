const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello World This is Rachel 4!')
})

console.log('in the node console');

app.listen(PORT, () => {
  console.log('Server is running & listening on port: ${PORT}');
});

// app.listen(port, () => {
//  console.log('Example app listening on port ${port}')
//})
