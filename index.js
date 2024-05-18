const express = require('express')
const cors = require('cors');
const app = express()
const gameRoutes = require('./routes/gameRoutes')
const slideRoutes = require('./routes/slideRoutes')
const userRoutes = require('./routes/userRoutes')

const port = 3333;
const hostname = '127.0.0.1';

app.use(cors("http://localhost"));
app.use(express.json());
app.use('/games', gameRoutes);
app.use('/slides', slideRoutes);
app.use('/user', userRoutes);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
