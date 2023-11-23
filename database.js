// ===== IMPORTS ===== \\
import mysql from "mysql2";
import "dotenv/config";

//database konfigurationer
const dbConfig = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    multipleStatements: true,
};

//MySQL forbindelse
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.log("Fejl ved oprettelse til databasen: " + err);
    } else {
        console.log("Forbindelse til databasen oprettet!")
    }
});

export default connection;