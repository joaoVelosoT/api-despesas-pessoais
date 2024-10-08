const Saida = require("../models/Saida");

const SaidaService = {
    create : async (data) => {
        try {
            return await Saida.create(data);
        } catch (error) {
            throw new Error("Erro ao tentar criar a saida");
        }
    },
    getAll : async () => {
        try {
            return await Saida.findAll();
        } catch (error) {
            throw new Error("Erro ao tentar listar as saidas");
            
        }
    },
    getOne : async (id) => {
        try {
            const saida = await Saida.findByPk(id);

            if(!saida){
                return null
            }

            return saida;
        } catch (error) {
            throw new Error("Erro ao tentar listar uma unica saida");
        }
    },
    update : async (id, data) => {
        try {
            const saida = await Saida.findByPk(id);
            if(!saida){
                return null;
            }
            return await saida.update(data);
        } catch (error) {
            throw new Error("Erro ao tentar atualizar a saida");
        }
    },
    delete : async (id) => {
        try {
            const saida = await Saida.findByPk(id);

            if(!saida){
                return null;
            }

            return await saida.destroy();
        } catch (error) {
            throw new Error("Erro ao deletar uma saida");
            
        }
    }
}

module.exports = SaidaService;