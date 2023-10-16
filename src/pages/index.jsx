import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style'

const PagesRootComponent = () => {
    const location = useLocation()

    return (
        <div className='root'>
            <div className="form">
            
            </div>
        </div>
    )
    // return (location.pathname === '/login' ? <LoginPage /> : location.pathname === '/register' ? <RegisterPage /> : null);
};

export default PagesRootComponent;