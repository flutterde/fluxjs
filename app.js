const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 3000



app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/post_routes')); 

app.get('/', (req, res) => {
    res.send('Hello World from FluxJs!')
});


app.listen(port);