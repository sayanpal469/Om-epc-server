const app = require('./app');
const connectDb = require('./dataBase');
require('dotenv').config();

// Db connection
connectDb()

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})