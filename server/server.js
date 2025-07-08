const express = require('express');
const app = express(); 
//CORS is a security feature that restricts web pages from making requests to a different domain than the one that served the web page
const cors = require('cors'); //used to enable CORS

// corsOptions is used to configure CORS settings
const corsOptions = {
  origin: ["http://localhost:5173"], // React app URL
  //methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //credentials: true,
  //optionsSuccessStatus: 204 // For legacy browser support
};

// Use the cors middleware with the specified options
app.use(cors(corsOptions));

//test endpoint
app.get('/api-test', (req, res) => {
  res.json({"fruits": ["apple", "banana", "cherry"]});
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});