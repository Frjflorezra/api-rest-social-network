// importaciones
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

//mensaje de bienvenida

console.log("API node arriba");

//Conexiónes a la BD

connection();

// crear servidor de node

const app = express();
const puerto = 3900;

//configurar cors: permite que las peticiones se hagan correctamente

app.use(cors());

// Conversion de datos (body a objetos js)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurar rutas

app.get("/test-route", (req, res) => {
  return res.status(200).json({
    id: 1,
    name: "francisco florez",
    username: "frjflorez",
  });
});

// configurar el servidor para escuchar las peticiones HTTP

app.listen(puerto, () => {
  console.log("servidor de node corriendo en el puerto", puerto);
});
