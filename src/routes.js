//const {Router} = require('express');

import {Router} from 'express'
import mongoose from 'mongoose';

import UseController from './app/controllers/UseController';



const routes = new Router();

routes.post('/users',UseController.store)

/*routes.get('/', async (req,res)=>{
    await User.create({
        nome:'Yuri3',
        email:'teste@teste.com',
        senha:'12345'
    }, function(err,small){
        if(err)return res.status(400).json({error:"Erro: Usuário não foi cadastrado !"});
        
        return res.status(200).json({error: "Usuário cadastrado com Sucesso !"});
    })
})*/


//module.exports = routes;
export default routes