import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import {Context} from '../../context/Context';
const Header = () => {
    const {dispatch, user} = useContext(Context)
    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }
    return (
    <header>
        <img src="" alt="" />
        <nav>
        <Link to="/">Главная</Link>
        <Link to="/createpost">Создать пост</Link>
        {user ? <Link to={"/profile"}>{user.username}</Link> :<Link to="/register">Регистрация</Link>}
        {user ? <Button variant="outlined" onClick={handleLogout}>Выйти</Button> : <Link to="/login">Войти</Link>}
        </nav>
    </header>
    );
};

export default Header;