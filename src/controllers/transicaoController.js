const TransicaoService = require("../services/transicaoService");

const TransicaoController = {
    create : async (req,res) => {
        try {
            const data = {
              valor : req.body.valor,
              descricao : req.body.descricao,
              tipo : req.body.tipo  
            }

            const transicao = await TransicaoService.create(data);

            return res.status(200).json({
                msg : "Transicao criada com sucesso",
                transicao
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao criar transicao"
            })
        }
    },
    getAll : async (req,res) => {
        
        try {
            const transicoes = await TransicaoService.getAll();

            return res.status(200).json({
                transicoes
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao listar transicao"
            })
        }
    },
    getOne : async (req,res) => {
        try {
            const {id} = req.params;

            const transicao = await TransicaoService.getOne(id);

            if(!transicao){
                return res.status(400).json({
                    msg : "Transicao não encontrada"
                })
            }

            return res.status(200).json({
                transicao
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao listar transicao"
            })
        }
    },
    update : async (req,res) => {
        try {
            const {id} = req.params;

            const data = {
                valor : req.body.valor,
                descricao : req.body.descricao,
                tipo : req.body.tipo  
              }

            const transicao = await TransicaoService.update(id, data);

            if(!transicao){
                return res.status(400).json({
                    msg : "Transicao não encontrada"
                })
            }

            return res.status(200).json({
                msg : "Transicao atualizada com sucesso",
                transicao
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao listar transicao"
            })
        }
    },
    delete : async (req,res) => {
        try {
            const {id} = req.params;

            const transicao = await TransicaoService.delete(id);

            if(!transicao){
                return res.status(400).json({
                    msg : "Transicao não encontrada"
                })
            }

            return res.status(200).json({
                msg : "Transicao deletada com sucesso",
                transicao
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao listar transicao"
            })
        }
    },
    
}

module.exports = TransicaoController;