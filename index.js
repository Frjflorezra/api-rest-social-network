// importaciones
import connection from "./database/connection.js";
import express, { json, urlencoded } from "express";
import cors from "cors";
import UserRoutes from "./routes/user.js";
import FollowRoutes from "./routes/follow.js";
import PublicationRoutes from "./routes/publication.js";

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

app.use(json());
app.use(urlencoded({ extended: true }));

//configurar rutas

app.use("/api/user", UserRoutes);
app.use("/api/follow", FollowRoutes);
app.use("/api/publication", PublicationRoutes);

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
