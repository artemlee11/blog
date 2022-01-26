import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3004/register/',{
        email,
        username: login,
        password
        })
        setEmail("")
        setLogin("")
        setPassword("")
    }

    return (
    <form className="reg-form" onSubmit={handleRegister}>
      <TextField
        value={email}
        type={email}
        onChange={(e) => setEmail(e.target.value)}
        id="post-title"
        label="Введите Email"
        variant="outlined"
        className="reg-input"
        required
      />
      <TextField
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        id="post-descr"
        label="Введите логин"
        variant="outlined"
        className="reg-input"
        required
      />
      <TextField
        value={password}
        type={password}
        onChange={(e) => setPassword(e.target.value)}
        id="post-descr"
        label="Придумайте пароль"
        variant="outlined"
        className="reg-input"
        required
      />
      <Button type="submit" variant="contained">
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default Register;