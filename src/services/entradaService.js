const Entrada = require("../models/entrada");


const EntradaService = {
    create : async (data) => {
        try {
            const entrada = await data;
            return Entrada.create(entrada);

        } catch (error) {
            throw new Error('Ocorreu um erro ao criar a entrada')
        }
    },
    getAll : async () => {
        try {
            const entradas = await Entrada.findAll();

            return entradas;
        } catch (error) {
            throw new Error('Ocorreu um erro ao listar as entradas')
        }
    }
}



module.exports = EntradaService;    