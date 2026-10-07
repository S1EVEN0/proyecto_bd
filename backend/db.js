const mysql = require("mysql2");

// Configuración de la conexión a MySql

const conexion = mysql.createConnection({
    host: "localhost", // Servidor local
    user: "root", // Usuario de MySql (Por defecto en XAMMP)
    database: "tienda" // Nombre de la base de datos
})

// Comprobar si la conexión fue exitosa
conexion.connect((error) => {
    if (error) {
        console.error("Error al conectar con MySQL:", error);
        return;
    }
    console.log("Conexión exitosa con MySQL");
});

// Eporta la conexión para reutiloizarla en las rutas del servidor
module.exports = conexion;