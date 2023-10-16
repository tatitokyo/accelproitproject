import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
}

export default App;