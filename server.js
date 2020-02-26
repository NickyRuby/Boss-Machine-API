const express = require('express');
const app = express();

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html


// Add middware for parsing request bodies here:
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // !! использую, чтобы при POST / UPDATE запросах превращать тело запроса в JSON и использовать дальше


// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter); // все роуты уже вложены в этот, это как обертка 


// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
app.listen(PORT);
app.use(express.static('public'));
}
