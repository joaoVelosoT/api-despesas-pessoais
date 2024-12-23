// const { where } = require("sequelize");
const Transacao = require("../models/Transacao");

const TransacaoService = {
  create: async (data) => {
    try {
      return await Transacao.create(data);
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar a transacao");
    }
  },
  getAll: async (id) => {
    try {
      return await Transacao.find({ user_id: id });
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao listar as transacoes");
    }
  },
  getOne: async (id, user_id) => {
    try {
      const transacao = await Transacao.findOne({
        _id: id,
        user_id: user_id,
      });

      if (!transacao) {
        return null;
      }

      return transacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao listar uma transacao");
    }
  },
  update: async (id, data, user_id) => {
    try {
      const transacao = await Transacao.findOne({
        _id: id,
        user_id: user_id,
      });

      if (!transacao) {
        return null;
      }

      return await transacao.updateOne(data);
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao atualizar a transacao");
    }
  },
  delete: async (id) => {
    try {
      const transacao = await Transacao.findById(id);

      if (!transacao) {
        return null;
      }

      return await transacao.deleteOne();
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao deletar as transacoes");
    }
  },
  total: async (id) => {
    try {
      let entradas = 0;
      let saidas = 0;

      const transacoes = await Transacao.find({ user_id: id });

      transacoes.forEach((transacao) => {
        if (transacao.tipo === "Entrada") {
          entradas += transacao.valor;
        } else {
          saidas += transacao.valor;
        }
      });

      let total = entradas - saidas;

      return total;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao mostrar o total");
    }
  },
  totalEntradas: async (id) => {
    try {
      const transacoes = await Transacao.find({
        tipo: "Entrada",
        user_id: id,
      });
      let totalEntradas = 0;

      transacoes.forEach((entradas) => {
        totalEntradas += entradas.valor;
      });

      return totalEntradas;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao mostrar o total de entradas");
    }
  },
  totalSaidas: async (user_id) => {
    try {
      const transacoes = await Transacao.find({
        tipo: "Saida",
        user_id: user_id,
      });

      let totalSaidas = 0;

      transacoes.forEach((saidas) => {
        totalSaidas += saidas.valor;
      });
      return totalSaidas;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao mostrar o total de saidas");
    }
  },
  todasTransacoes: async (user_id) => {
    try {
      return await Transacao.find({ user_id: user_id });
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao mostrar todas as transacoes");
    }
  },
  todasEntradas: async (user_id) => {
    try {
      return await Transacao.find({
        user_id: user_id,
        tipo: "Entrada",
      });
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao mostrar todas as entradas");
    }
  },
  todasSaidas: async (user_id) => {
    try {
      return await Transacao.find({
        user_id: user_id,
        tipo: "Saida",
      });
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao mostrar todas as saidas");
    }
  },
};

module.exports = TransacaoService;
