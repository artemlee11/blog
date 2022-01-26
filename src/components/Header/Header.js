import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../context/Context';
import Button from "@mui/material/Button";
const Header = () => {
    const {dispatch, user} = useContext(Context)

    const Logout = () => {
        dispatch({type:"LOGOUT"})
    }
    return (
    <header>
        <img src="" alt="" />
        <nav>
        <Link to="/">Главная</Link>
        <Link to="/createpost">Создать пост</Link>
        {user ? user.username :<Link to="/register">Регистрация</Link>}
        {user ? <Button variant="outlined">Выйти</Button> : <Link to="/login">Войти</Link>}
        </nav>
    </header>
    );
};

export default Header;