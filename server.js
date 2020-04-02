
/* Initializing & requiring zone */
const express = require('express');
const app = express();
const cors = require('cors');

/* Middlewares */
app.use(cors({ optionSuccessStatus: 200 }));  // some legacy browsers choke on 204
app.use(express.static('public'));

/* Routing */
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/* My stuff */
app.get('/api/whoami', (request, response) => {

  let _ip = request.header('X-Forwarded-For').split(',')[0];
  let _language = request.header('Accept-Language');
  let _software = request.header('User-Agent');

  response.json({
    ipaddress: _ip,
    language: _language,
    software: _software
  })
});


/* Starting server */
app.listen(3000, () => console.log('server working...'));
