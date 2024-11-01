const TransicaoService = require("../services/transicaoService");

const TransicaoController = {
    create : async (req,res) => {
        try {

            console.log(req.user);

            const data = {
              valor : req.body.valor,
              descricao : req.body.descricao,
              tipo : req.body.tipo ,
              user_id : req.user.id,
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

            const transicoes = await TransicaoService.getAll(req.user.id);

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

            const user_id = req.user.id;
            const transicao = await TransicaoService.getOne(id, user_id);

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
            
            const user_id = req.user.id;
            console.log(user_id);

            const data = {
                valor : req.body.valor,
                descricao : req.body.descricao,
                tipo : req.body.tipo,
                user_id : req.user.id,

              }

            const transicao = await TransicaoService.update(id, data, user_id);

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
    total : async (req,res) => {
        try {

            const total = await TransicaoService.total(req.user.id);
            
            return res.status(200).json({
                msg : "Total",
                total
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao listar o total"
            })
        }
    },
    totalEntradas : async(req,res) => {
        try {

          const totalEntradas = await TransicaoService.totalEntradas(req.user.id);

          return res.status(200).json({
            msg : "Total de entradas",
            totalEntradas
          })  
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao listar o total de entradas"
            })
        }
    },
    totalSaidas : async (req,res) => {
        try {
            const totalSaidas = await TransicaoService.totalSaidas(req.user.id);

            return res.status(200).json({
                msg : "Total de saidas",
                totalSaidas
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao listar o total de saidas"
            })
        }
    }

    
}

module.exports = TransicaoController;