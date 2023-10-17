import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import { Box } from '@mui/material';

const PagesRootComponent = () => {
    const location = useLocation()

    return(
        <div className='display: flex, justify-content: center, align-items: center, width: 100vw, height: 100vh'>
            <div className="form">
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    {location.pathname === '/login' ? <LoginPage /> : location.pathname === '/register' ? <RegisterPage /> : null}
                </Box>
            </div>
        </div>
    )
};

export default PagesRootComponent;