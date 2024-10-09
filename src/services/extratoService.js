const Entrada = require("../models/Transicao");
const Extrato = require("../models/Extrato");

const ExtratoService = {
    create : async(data) => {
        try {
            return await Extrato.create(data);
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar adicionar algo ao extrato");
        }
    },
    getAll : async () => {
        try {

            const extrato = await Extrato.findAll({
                attributes : ['id', 'createdAt'],
                include : [{
                    model : Entrada,
                    attributes : ['valor','id']
                }],
            });
            
            // console.log("teste",extrato)

            extrato.forEach(itens => {
                console.log("item1",itens.dataValues)
            })
            return extrato

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar listar o extrato");
            
        }
    },
    delete : async () => {
        try {
            const extrato= await Extrato.findAll();

            extrato.forEach(async item => {
                await item.destroy()
            })

            // await Extrato.drop()
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar limpar o extrato");
        }
    }
}

module.exports = ExtratoService;