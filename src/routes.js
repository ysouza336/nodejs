//const {Router} = require('express');

import {Router} from 'express'
import mongoose from 'mongoose';

import UseController from './app/controllers/UseController';
import LoginController from './app/controllers/LoginController'

import authMiddleware from './app/middlewares/auth';


const routes = new Router();

routes.post('/users',UseController.store)
routes.delete('/users/:id',authMiddleware,UseController.delete)
routes.post('/login',LoginController.store)



//module.exports = routes;
export default routes