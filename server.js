const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;

const Contenedor = require('./contenedor.js');
const objContenedor = new Contenedor();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Muestra archivo de productos productos.txt
app.get('/productos', (req, res) => {
    let listaproductos = objContenedor.obtenerproductos();
    res.json(listaproductos);
});

// muestra un producto al azar
app.get('/productorandom', (req, res) => {
    let productoalazar = objContenedor.devuelvealazar();
    res.json(productoalazar);
});

// para escuchar el puerto
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto: ${server.address().port}`)
});

server.on("error", error => console.log(`Error en servidor ${error}`));
