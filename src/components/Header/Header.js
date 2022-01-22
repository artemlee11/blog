import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <header>
        <img src="" alt="" />
        <nav>
        <Link to="/">Главная</Link>
        <Link to="/createpost">Создать пост</Link>
        <Link to="/register">Регистрация</Link>
        <Link to="/login">Войти</Link>
        </nav>
    </header>
    );
};

export default Header;