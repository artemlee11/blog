import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import axios from 'axios'
import {Context} from "../../context/Context"
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {dispatch, user} = useContext(Context)
    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post('http://localhost:3004/login/',{
                email,
                password
            }) 
            console.log(res.data.user)
            dispatch({type:"LOGIN_SUCCESS", payload: res.data.user})
            setEmail("")
            setPassword("")
            
        }
        catch(error){
            console.log(error)
            dispatch({type:"LOGIN_FAILURE"})
        }
    }
    console.log(user)
    return (
        <div>
       <form onSubmit={handleLogin}>
            <TextField required value={email} onChange={e => setEmail(e.target.value) } id="email-register" label="Введите почту" variant="outlined" />
            <TextField required type="password" value={password} onChange={e => setPassword(e.target.value) } id="email-register" label="Введите пароль" variant="outlined" />
            <Button type="submit" label="submit">Войти</Button>
       </form>
        </div>
    );
};

export default Login;