import React, { Fragment } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const LoginPage = () => {
    return (
        <>
            <Typography variant="h2" fontFamily='Popins' textAlign='center' >Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Popins' textAlign='center' >Введите ваш email и пароль</Typography>
            <TextField fullWidth={true} margin='normal' label='Email' variant='outlined' placeholder='Введите ваш email' />
            <TextField type="password" fullWidth={true} margin='normal' label='Password' variant='outlined' placeholder='Введите ваш пароль' />
            <Button sx={{fontFamily:'Popins', marginTop: 2, marginBottom: 2, width: '20%' }} variant='contained'>Войти</Button>
            <Typography variant="body1" sx={{fontFamily: 'Popins', }}>У вас нет аккаунта?<span className='color: #1900D5, margin-left: 10px, cursor: pointer '>Регистрация</span></Typography>
        </>
    );
};

export default LoginPage