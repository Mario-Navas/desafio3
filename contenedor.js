const fs = require('fs');

class Contenedor{
    rutaArchivo;
    productos;

    constructor(){
        this.rutaArchivo = './productos.txt';
    }

    // Obtener archivo desde producto.txt
    obtenerproductos(){
        try {
            let contenido = fs.readFileSync(this.rutaArchivo, 'utf-8');
            if (contenido) {
                this.productos = JSON.parse(contenido);
            } else {
                this.productos = [];
            }

            return this.productos;
        } catch (error) {
            return [];
        }
    }

    // Devuelve un producto al azar
    devuelvealazar() {
        try {
            let contenido = fs.readFileSync(this.rutaArchivo, 'utf-8');
            if (contenido) {
                this.productos = JSON.parse(contenido);
            } else {
                this.productos = [];
            }
            let listaProductos=this.productos    
            let cant = 1;
            for (const producto of listaProductos) {
                cant += 1;
            }
            let aleatorio=(parseInt(Math.random() * cant))+1;
            const buscado = listaProductos.find(pp => pp.id==aleatorio)
            return buscado
    
            } catch (error) {
            return [];
        }
    }

}

module.exports = Contenedor;
