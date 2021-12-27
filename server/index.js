const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
// })
app.use(require('./auth/login'))

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));