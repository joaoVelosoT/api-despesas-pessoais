const { where } = require("sequelize");
const Transicao = require("../models/Transicao");

const TransicaoService = {
    create : async (data) => {
        try {
            return await Transicao.create(data);
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar a transicao");
        }
    },
    getAll : async (id) => {
        try {
            return await Transicao.findAll({where : {user_id : id}});
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao listar as transicoes");
        }
    },
    getOne : async (id, user_id) => {
        try {

            const transicao = await Transicao.findOne({
                where : { 
                    id : id,
                    user_id : user_id,

                }
            });
            console.log(transicao)
            if(!transicao){
                return null
            }

            return transicao
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao listar uma transicao");
        }
    },
    update : async (id, data, user_id) => {
        try {

            const transicao = await Transicao.findOne({
                where : { 
                    id : id,
                    user_id : user_id,

                }
            });

            if(!transicao){
                return null
            }
            

            return await transicao.update(data)
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar as transicoees");
        }
    },
    delete : async (id) => {
        try {

            const transicao = await Transicao.findByPk(id);

            if(!transicao){
                return null
            }

            return await transicao.destroy();

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao deletar as transicoes");
        }
    },
    total : async (id) => {
        try {

            let total = 0;

            const transicoes = await Transicao.findAll({where : {user_id : id}});

            transicoes.forEach(transacao => {
                // let entrada = 0
                // let saida = 0
                if(transacao.tipo === "Entrada"){
                    total += transacao.valor
                }else {
                    total -= transacao.valor
                }
                // console.log(transacao.tipo);
                
            })

            return total

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao mostrar o total");
        }
    },
    totalEntradas : async (id) => {
        try {
            const transicoes = await Transicao.findAll({
                where : {
                    tipo : "Entrada",
                    user_id : id
                }
            })
            let totalEntradas = 0;

            transicoes.forEach(entradas => {
                totalEntradas += entradas.valor
            })

            return totalEntradas
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao mostrar o total de entradas");
        }
    },
    totalSaidas : async () => {
        try {
            const transicoes = await Transicao.findAll({ where : {tipo : "Saida"}});
            let totalSaidas = 0;
            transicoes.forEach(saidas => {
                totalSaidas += saidas.valor
            })
            return totalSaidas
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao mostrar o total de saidas");
            
        }
    }
}

module.exports = TransicaoService;