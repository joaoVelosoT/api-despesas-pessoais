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
    getAll : async () => {
        try {
            return await Transicao.findAll();
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao listar as transicoes");
        }
    },
    getOne : async (id) => {
        try {

            const transicao = await Transicao.findByPk(id);

            if(!transicao){
                return null
            }

            return transicao
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao listar uma transicao");
        }
    },
    update : async (id, data) => {
        try {

            const transicao = await Transicao.findByPk(id);

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
}

module.exports = TransicaoService;