const EntradaService = require("../services/entradaService");

const EntradaController = {
    create : async (req,res) => {
        try {
            const data = {
                valor : req.body.valor,
                descricao : req.body.descricao
            }

            const entrada = await EntradaService.create(data);

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
    },
    getOne : async (req,res) => {
        try {
            const {id} = req.params;

            const entrada = await EntradaService.getOne(id);

            if(!entrada){
                return res.status(400).json({
                    msg : "Entrada não encontrada"
                })
            }
            return res.status(200).json({
                entrada
            })

        } catch (error) {
            console.error(error);
            res.status(500).json({
                msg : "Erro ao tentar listar uma entrada unica"
            })
            
        }
    },
    update : async (req,res) => {
        try {
            const {id} = req.params;
            const data = {
                valor : req.body.valor,
                descricao : req.body.descricao
            }
            const entrada = await EntradaService.update(data, id);

            if(!entrada){
                return res.status(400).json({
                    msg : "Não foi encontrada a entrada"
                })
            }

            return res.status(200).json({
                msg : "Entrada atualizada com sucesso",
                entrada
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({
                msg : "Erro ao tentar atualizar a entrada"
            })
            
        }
    },
    delete : async (req,res) => {
        try {
            const {id} = req.params

            const entrada = await EntradaService.delete(id);

            if(!entrada){
                return res.status(400).json({
                    msg : "Não foi encontrada a entrada"
                })
            }

            return res.status(200).json({
                msg : "Entrada deletada com sucesso",
                entrada
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({
                msg : "Erro ao tentar deletar a entrada"
            })
            
        }
    }
}


module.exports = EntradaController;