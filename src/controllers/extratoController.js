// const ExtratoService = require("../services/extratoService");

// const ExtratoController = {
//     create : async(req,res) => {
//         try {
//             const data = {
//                 entrada_id : req.body.entrada_id,
//                 saida_id : req.body.saida_id
//             }

//             const extrato = await ExtratoService.create(data);
//             return res.status(200).json({
//                 msg : "Extrato criado com sucesso",
//                 extrato
//             })
//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({
//                 msg : "Erro ao tentar criar o extrato"
//             })
//         }
//     },
//     getAll : async (req,res) => {
//         try {
            
//             const extrato = await ExtratoService.getAll();

//             return res.status(200).json({
//                 extrato
//             })
//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({
//                 msg : "Erro ao tentar listar o extrato"
//             })
//         }
//     },
//     delete : async (req,res) => {
//         try {

//             // const {id} = req.params;
            
//             const extrato = await ExtratoService.delete();

//             return res.status(200).json({
//                 msg : "O extrato foi limpo"
//             })

//             // if(!extrato){
//             //     return res.status(400).json({
//             //         msg : "Não foi encontrado o extrato"
//             //     })
//             // }
//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({
//                 msg : "Erro ao tentar deletar o extrato"
//             })
//         }
//     }
// }


// module.exports = ExtratoController;