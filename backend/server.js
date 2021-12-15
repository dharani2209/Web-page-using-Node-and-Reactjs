const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
var cors=require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send("Hi!..This is my page");
});
const tourismRoutes = require('./src/routes/tourism.routes')
app.use('/api/v1/tourism', tourismRoutes)
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});