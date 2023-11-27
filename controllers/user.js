import { db } from "../db.js";

export const getUsers = (req, res) => {
    const { status } = req.query; // Obtém o valor de 'status' dos parâmetros de consulta

    let q = "SELECT * FROM usuarios";

    if (status) {
        // Se um status foi fornecido, filtre os usuários com base nele
        if (status === "AUTORIZADO") {
            q = "SELECT * FROM usuarios WHERE status = 'AUTORIZADO'";
        } else if (status === "NEGADO") {
            q = "SELECT * FROM usuarios WHERE status = 'NEGADO'";
        } else if (status === "PENDENTE") {
            q = "SELECT * FROM usuarios WHERE status = 'PENDENTE'";
        }
        // Se status for "TODOS", a consulta padrão sem filtro será usada
    }

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};


export const autorizarUsuario = (req, res) => {
    const { userId } = req.body;

    // Atualize o status do usuário com base no userId recebido
    const q = "UPDATE usuarios SET status = 'AUTORIZADO' WHERE id = ?";

    db.query(q, [userId], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário autorizado com sucesso.");
    });
};