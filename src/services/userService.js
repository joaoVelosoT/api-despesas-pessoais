const User = require("../models/User");
const jwt = require('jsonwebtoken');

const UserService = {
    create : async(data) => {
        try {
            const existeUser = await User.findOne({ where : {email : data.email}});
            if(existeUser){
                return null;
            }
            return await User.create(data);

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar user");
        }
    },
    getAll : async() => {
        try {
            return await User.findAll();

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao listar os users");
        }
    },
    getOne : async(id) => {
        try {
            const user = await User.findByPk(id);
            if(!user){
                return null
            }
            return user
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao listar user");
        }
    },
    update : async(id,data) => {
        try {
            const user = await User.findByPk(id);

            if(!user){
                return null
            }

            return await user.update(data);
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar user");
        }
    },
    delete : async(id) => {
        try {
            const user = await User.findByPk(id);

            if(!user){
                return null
            }

            return await user.destroy();
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao deletar user");
        }
    },
    login : async (data) => {
        try {
            const user = await User.findOne({
                where : {
                    email : data.email,
                    senha : data.senha
                }
            });

            if(!user){
                return null
            }
            const token = jwt.sign({
                id : user.id,
                nome : user.nome
            }, process.env.SECRET, { expiresIn : "1h"});

            return token

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao fazer login");
            
        }
    }
}

module.exports = UserService;