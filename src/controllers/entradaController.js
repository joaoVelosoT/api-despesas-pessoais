const EntradaService = require("../services/entradaService");

const EntradaController = {
    create : async (req,res) => {
        try {
            const entrada = await EntradaService.create(req.body);
            return res.status(201).json({
                msg : "Entrada criada com sucesso"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao tentar criar a entrada"
            })
        }
    },
    getAll : async (req,res) => {
        try {
            const entradas = await EntradaService.getAll()
            return res.status(200).json({
                entradas
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({
                msg : "Erro ao tentar listar as entradas"
            })
        }
    }
}


module.exports = EntradaController;