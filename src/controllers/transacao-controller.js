const TransacaoService = require("../services/transacao-service");

const TransacaoController = {
  create: async (req, res) => {
    try {
      const data = {
        valor: req.body.valor,
        descricao: req.body.descricao,
        tipo: req.body.tipo,
        user_id: req.user.id,
      };

      const transacao = await TransacaoService.create(data);

      return res.status(200).json({
        msg: "Transacao criada com sucesso",
        transacao,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao criar transacao",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const transacoes = await TransacaoService.getAll(req.user.id);

      return res.status(200).json({
        transacoes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar transacao",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const user_id = req.user.id;
      const transacao = await TransacaoService.getOne(id, user_id);

      if (!transacao) {
        return res.status(404).json({
          msg: "Transacao não encontrada",
        });
      }

      return res.status(200).json({
        transacao,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar transacao",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const user_id = req.user.id;

      const data = {
        valor: req.body.valor,
        descricao: req.body.descricao,
        tipo: req.body.tipo,
        user_id: req.user.id,
      };

      const transacao = await TransacaoService.update(id, data, user_id);

      if (!transacao) {
        return res.status(404).json({
          msg: "Transacao não encontrada",
        });
      }

      return res.status(200).json({
        msg: "Transacao atualizada com sucesso",
        transacao,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar transacao",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const transacao = await TransacaoService.delete(id);

      if (!transacao) {
        return res.status(404).json({
          msg: "Transacao não encontrada",
        });
      }

      return res.status(200).json({
        msg: "Transacao deletada com sucesso",
        transacao,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar transacao",
      });
    }
  },
  total: async (req, res) => {
    try {
      const total = await TransacaoService.total(req.user.id);

      return res.status(200).json({
        msg: "Total",
        total,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar o total",
      });
    }
  },
  totalEntradas: async (req, res) => {
    try {
      const totalEntradas = await TransacaoService.totalEntradas(req.user.id);

      return res.status(200).json({
        msg: "Total de entradas",
        totalEntradas,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar o total de entradas",
      });
    }
  },
  totalSaidas: async (req, res) => {
    try {
      const totalSaidas = await TransacaoService.totalSaidas(req.user.id);

      return res.status(200).json({
        msg: "Total de saidas",
        totalSaidas,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar o total de saidas",
      });
    }
  },
  todasTransacoes: async (req, res) => {
    try {
      const transacoes = await TransacaoService.todasTransacoes(req.user.id);

      return res.status(200).json({
        msg: "Todas as transacoes",
        transacoes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar todas as transacoes",
      });
    }
  },
  todasEntradas: async (req, res) => {
    try {
      const entradas = await TransacaoService.todasEntradas(req.user.id);

      return res.status(200).json({
        msg: "Todas as entradas",
        entradas,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar todas as entradas",
      });
    }
  },
  todasSaidas: async (req, res) => {
    try {
      const saidas = await TransacaoService.todasSaidas(req.user.id);

      return res.status(200).json({
        msg: "Todas as saidas",
        saidas,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar todas as saidas",
      });
    }
  },
};

module.exports = TransacaoController;
