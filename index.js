// Inicialización de las variables de entorno de nuestro .env
require("dotenv").config();
// Conexión con Base de datos
require("./src/utils/mongoClient");
// Inicializador del api y exporta todo lo necesario para la inicialización del server
const { app } = require("./src/api/index");

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Server initialized on PORT: ${PORT}`);
});
