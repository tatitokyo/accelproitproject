import React, { Fragment } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const RegisterPage = () => {
    return (
        <>
        <Typography variant="h2" fontFamily='Popins' textAlign='center' >Регистрация</Typography>
        <Typography variant="body1" marginBottom={3} fontFamily='Popins' textAlign='center' >Введите данные для регистрации</Typography>
        <TextField fullWidth={true} margin='normal' label='Имя' variant='outlined' placeholder='Введите ваше имя' />
        <TextField fullWidth={true} margin='normal' label='Username' variant='outlined' placeholder='Введите ваш username' />
        <TextField fullWidth={true} margin='normal' label='Email' variant='outlined' placeholder='Введите ваш email' />
        <TextField type="password" fullWidth={true} margin='normal' label='Password' variant='outlined' placeholder='Введите ваш пароль' />
        <TextField type="password" fullWidth={true} margin='normal' label='Password' variant='outlined' placeholder='Повторите ваш пароль' />
        <Button sx={{fontFamily:'Popins', marginTop: 2, marginBottom: 2, width: '50%' }} variant='contained'>Зарегистрироваться</Button>
        <Typography variant="body1" sx={{fontFamily: 'Popins', }}>У вас есть аккаунт?<span className='color: #1900D5, margin-left: 10px, cursor: pointer '>Авторизация</span></Typography>
    </>
    );
};

export default RegisterPage