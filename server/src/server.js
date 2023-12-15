const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev")); //Permite ver las peticiones con más detalles en consola.
server.use(express.json()); //Permite parsear la información que llega por body.
server.use(cors()); //Permite hacer las peticiones desde el front.

server.use(router); //Enrutamiento sin ruta raíz definida.

module.exports = server;
