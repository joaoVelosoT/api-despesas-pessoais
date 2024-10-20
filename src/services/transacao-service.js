const { where } = require("sequelize");
const Transacao = require("../models/Transacao");

const TransacaoService = {
    create : async (data) => {
        try {
            return await Transacao.create(data);
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar a transacao");
        }
    },
    getAll : async (id) => {
        try {
            return await Transacao.findAll({where : {user_id : id}});
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao listar as transacoes");
        }
    },
    getOne : async (id, user_id) => {
        try {

            const transacao = await Transacao.findOne({
                where : { 
                    id : id,
                    user_id : user_id,

                }
            });
            
            if(!transacao){
                return null
            }

            return transacao
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao listar uma transacao");
        }
    },
    update : async (id, data, user_id) => {
        try {

            const transacao = await Transacao.findOne({
                where : { 
                    id : id,
                    user_id : user_id,

                }
            });

            if(!transacao){
                return null
            }
            

            return await transacao.update(data);

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar a transacao");
        }
    },
    delete : async (id) => {
        try {

            const transacao = await Transacao.findByPk(id);

            if(!transacao){
                return null
            }

            return await transacao.destroy();

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao deletar as transacoes");
        }
    },
    total : async (id) => {
        try {

            let entradas = 0;
            let saidas = 0;

            const transacoes = await Transacao.findAll({where : {user_id : id}});

            transacoes.forEach(transacao => {
                // let entrada = 0
                // let saida = 0
                if(transacao.tipo === "entrada"){
                    entradas += transacao.valor
                }else {
                    saidas += transacao.valor
                }
                // console.log(transacao.tipo);
                
            })

            let total = entradas - saidas;

            console.log("entradas", entradas);
            console.log("saidas", saidas);
            return total

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao mostrar o total");
        }
    },
    totalEntradas : async (id) => {
        try {
            const transacoes = await Transacao.findAll({
                where : {
                    tipo : "Entrada",
                    user_id : id
                }
            })
            let totalEntradas = 0;

            transacoes.forEach(entradas => {
                totalEntradas += entradas.valor
            })

            return totalEntradas
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao mostrar o total de entradas");
        }
    },
    totalSaidas : async (user_id) => {
        try {
            const transacoes = await Transacao.findAll({ 
                where : {
                    tipo : "Saida",
                    user_id : user_id,
                }
            });

            let totalSaidas = 0;

            transacoes.forEach(saidas => {
                totalSaidas += saidas.valor
            })
            return totalSaidas
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao mostrar o total de saidas");
            
        }
    },
    todasTransacoes : async (user_id) => {
        try {
            
            return await Transacao.findAll({where : { user_id : user_id}});

            
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao mostrar todas as transacoes");
        }
    },
    todasEntradas : async (user_id) => {
        try {
            
            return await Transacao.findAll({
                where : {
                    user_id : user_id,
                    tipo : 'entrada'
                }
        })


        } catch (error) {
            console.error(error);
            throw new Error("Erro ao mostrar todas as entradas");
        }
    },
    todasSaidas : async (user_id) => {
        try {
            
            return await Transacao.findAll({
                where : {
                    user_id : user_id,
                    tipo : 'saida'
                }
        })

        
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao mostrar todas as saidas");
        }
    }
}

module.exports = TransacaoService;