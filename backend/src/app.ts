import express from "express";
import cors from "cors";
import { sequelize } from "./db/database.js";
import { clienteRouter } from "./routes/cliente.routes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/clientes", clienteRouter);

const iniciarServidor = async () => {
  try {
    await sequelize.authenticate();

    console.log("Conexión a SQLite establecida correctamente");

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
};

iniciarServidor();