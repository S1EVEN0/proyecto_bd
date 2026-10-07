const express = require("express");
const cors = require("cors");
const conexion = require("./db.js");


const app = express();

// Middlewares globales
app.use(cors());                // Permitir recibir peticiones desde el frontend
app.use(express.json());        // Habilitar la lectura de datos formato JSON en el cuerpo (req.body)

// Ruta de prueba 
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// 1. Obtener todos los productos (REACT)
app.get("/productos", (req, res) => {
    const sql = "SELECT * FROM productos";
  
    conexion.query(sql, (error, resultados) => {
        if (error) {
            console.error("Error al consultar:", error);
            return res.status(500).json({
                 mensaje: "Error al consultar los productos" 
            });
        }
        // Retomamos el array de productos como JSON al cliente
        res.json(resultados);
    });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor ejecutanodse en http://localhost:3000");
});