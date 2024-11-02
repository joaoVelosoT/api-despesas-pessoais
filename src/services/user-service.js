// const User = require("../models/User");
const jwt = require('jsonwebtoken');
const User = require('../models/User')
const UserService = {
    create : async(data) => {
        try {
            // const existeUser = await User.findOne({ where : {email : data.email}});
            const existeUser = await User.findOne().where('email').equals(data.email);
            
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
            return await User.find();

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao listar os users");
        }
    },
    getOne : async(id) => {
        try {
            if(id.length < 24 || id.length > 24){
                return null
            }
            const user = await User.findById(id);
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

            if(id.length < 24 || id.length > 24){
                return null
            }
            const user = await User.findById(id);

            if(!user){
                return null
            }

            return await user.updateOne(data);
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar user");
        }
    },
    delete : async(id) => {
        try {

            if(id.length < 24 || id.length > 24){
                return null
            }

            const user = await User.findById(id);

            if(!user){
                return null
            }

            return await user.deleteOne();
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao deletar user");
        }
    },
    login : async (data) => {
        try {

            // const user = await User.findOne({
            //     where : {
            //         email : data.email,
            //         senha : data.senha
            //     }
            // });

            const user = await User.findOne({
                email : data.email,
                senha : data.senha
            })
            // const user = await User.findOne().where('email').equals(data.email)
            console.log(user);



            if(!user){
                return null
            }
            const token = jwt.sign({
                id : user._id,
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