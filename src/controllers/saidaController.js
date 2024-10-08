const SaidaService = require("../services/saidaService");

const SaidaController = {
    create : async (req,res) => {
        try {
            const data = {
                valor : req.body.valor,
                descricao : req.body.descricao
            }

            const saida = await SaidaService.create(data);

            return res.status(200).json({
                msg : "Saida criada com sucesso"
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao criar a saida"
            })
        }
    },
    getAll : async (req,res) => {
        try {
            const saidas = await SaidaService.getAll();

            return res.status(200).json({
                saidas
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao listar as saidas"
            })
        }
    },
    getOne : async (req,res) => {
        try {
            const {id} = req.params

            const saida = await SaidaService.getOne(id);

            if(!saida){
                return res.status(400).json({
                    msg : "Saida não encontrada"
                })
            }

            return res.status(200).json({
                saida
            })
        } catch (error) {
            console.error(500).json({
                msg : "Erro ao listar uma unica saida"
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

            const saida = await SaidaService.update(id, data);
            
            if(!saida){
                return res.status(400).json({
                    msg : "Saida não encontrada"
                })
            }

            return res.status(200).json({
                msg : "Saida atualizada com sucesso",
                saida
            })


        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao tentar atualizar saida"
            })
        }
    },
    delete : async (req,res) => {
        try {
            const {id} = req.params

            const saida = await SaidaService.delete(id);
            
            if(!saida){
                return res.status(400).json({
                    msg : "Saida não encontrada"
                })
            }

            return res.status(200).json({
                msg : "Saida deletada com sucesso",
                saida
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao tentar deletar saida"
            })
        }
    }
}

module.exports = SaidaController;