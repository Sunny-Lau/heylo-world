var express = require('express'); 
var app = express();

const port = 3000

app.use(express.static(__dirname + '/_book'));

app.listen(process.env.PORT || port, () => console.log(`listening on port ${port}`));
