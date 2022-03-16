import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")

    const [open, setOpen] = React.useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3004/register/',{
        email,
        username:login,
        age,
        gender,
        password
        })
        setOpen(true)
        setEmail("")
        setLogin("")
        setAge("")
        setGender("")
        setPassword("")
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
    <form className="reg-form">
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
        value={age}
        onChange={(e) => setAge(e.target.value)}
        id="post-descr"
        label="Введите ваш возраст"
        variant="outlined"
        className="reg-input"
      />
      <TextField
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        id="post-descr"
        label="Введите ваш пол"
        variant="outlined"
        className="reg-input"
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
      <Button 
        type="submit" 
        variant="contained" 
        onClick={handleRegister}>
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default Register;