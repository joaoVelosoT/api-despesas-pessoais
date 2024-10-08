const Entrada = require("../models/entrada");
const Extrato = require("../models/Extrato");


const EntradaService = {
    create : async (data) => {
        try {
            // const entrada = await data;
            // return Entrada.create(entrada);
            const entrada = await Entrada.create(data);
            await Extrato.create({
                entrada_id : entrada.id
            })
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar a entrada')
        }
    },
    getAll : async () => {
        try {
            const entradas = await Entrada.findAll();

            return entradas;
        } catch (error) {
            throw new Error('Ocorreu um erro ao listar as entradas');
        }
    },
    getOne : async (id) => {
        try {
            const entrada = await Entrada.findByPk(id);

            return entrada
        } catch (error) {
            throw new Error('Ocorreu um erro ao listar uma unica entrada');
        }
    },
    update : async(data, id) => {
        try {
            const entrada = await Entrada.findByPk(id);

            if(!entrada){
                return entrada
            }

            await entrada.update(data);

            return entrada
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar entrada');
        }
    },
    delete : async (id) => {
        try {
            const entrada = await Entrada.findByPk(id);

            if(!entrada){
                return entrada
            }

            await entrada.destroy();
            
            return entrada;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar entrada');
        }
    }
}



module.exports = EntradaService;    