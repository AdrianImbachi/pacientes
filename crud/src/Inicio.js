const express  = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/User");


const app = express();
const port = process.env.PORT | 9000;

// middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get('/', (req, res) => {
    res.send("Bienvenido a la API");
});

// mongose connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("conectado a MongoDB Atlas"))
    .catch((error) => console.log(error));

app.listen(port, () => console.log('servidor en el puerto', port));