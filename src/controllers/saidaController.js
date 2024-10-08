const SaidaController = {
    create : (req,res) => {
        try {
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao criar a saida"
            })
        }
    },
    getAll : (req,res) => {
        try {
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao listar as saidas"
            })
        }
    },
    getOne : async (req,res) => {
        try {
            
        } catch (error) {
            console.error(500).json({
                msg : "Erro ao listar uma unica saida"
            })
        }
    },
    update : (req,res) => {
        try {
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao tentar atualizar saida"
            })
        }
    },
    delete : (req,res) => {
        try {
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro ao tentar deletar saida"
            })
        }
    }
}

module.exports = SaidaController;