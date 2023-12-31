//импорты штук
import express from 'express';

import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js';

import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js'

//база данных и проверка все ли работает

mongoose
    .connect(
        'mongodb+srv://admin:567As294Fi@cluster0.bwnqwv9.mongodb.net/pet?retryWrites=true&w=majority',
        )
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});