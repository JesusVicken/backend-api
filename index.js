import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
