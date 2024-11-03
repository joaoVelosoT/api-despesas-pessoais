const UserService = require("../services/user-service");

const UserController = {
  create: async (req, res) => {
    try {
      const data = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
      };

      const user = await UserService.create(data);

      if (!user) {
        return res.status(400).json({
          msg: "Já existe esse email",
        });
      }

      return res.status(200).json({
        msg: "User criado com sucesso",
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao criar usuario",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await UserService.getAll();

      return res.status(200).json({
        users,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar usuarios",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await UserService.getOne(id);

      if (!user) {
        return res.status(404).json({
          msg: "User não encontrado",
        });
      }

      return res.status(200).json({
        msg: "User encontrado",
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao listar usuario",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const data = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
      };

      const user = await UserService.update(id, data);

      if (!user) {
        return res.status(404).json({
          msg: "User não encontrado",
        });
      }

      return res.status(200).json({
        msg: "User atualizado",
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao atualizar usuario",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await UserService.delete(id);

      if (!user) {
        return res.status(404).json({
          msg: "User não encontrado",
        });
      }

      return res.status(200).json({
        msg: "User deletado",
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao deletar usuario",
      });
    }
  },
  login: async (req, res) => {
    try {
      const data = {
        email: req.body.email,
        senha: req.body.senha,
      };

      const user = await UserService.login(data);

      if (!user) {
        return res.status(404).json({
          msg: "Login não encontrado",
        });
      }

      return res.status(200).json({
        msg: "Login bem sucedido",
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao fazer login",
      });
    }
  },
};

module.exports = UserController;
