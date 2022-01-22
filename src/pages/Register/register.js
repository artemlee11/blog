import { TextField } from '@mui/material'
import React, {useState} from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'

const Register = () => {

    const [email, setEmail] = useState("")

    const [nickname, setNickname] = useState("")

    const [password, setPassword] = useState("")

    const [age, setAge] = useState("")

    const handleRegister = async (e) => {
        await e.preventDefault()
        axios.post("http://localhost:3004/register/" , {
            email,
            nickname,
            age,
            password,

        })
        setEmail('')
        setNickname('')
        setAge('')
        setPassword('')
        
        console.log('Hello')

    }

    return (
        <form onSubmit={handleRegister}>
                <TextField required="true"
                 value={email}
                  type="email"
                   onChange={e =>
                    setEmail(e.target.value) }
                     id="email-register"
                      label="Email"
                       variant="outlined" 
                />
                <TextField required value={nickname} onChange={e => setNickname(e.target.value) } id="email-register" label="Введите ваш логин" variant="outlined" />
                <TextField  value={age} onChange={e => setAge(e.target.value) } id="email-register" label="Введите ваш возраст" variant="outlined" />
                <TextField required type="password" value={password} onChange={e => setPassword(e.target.value) } id="email-register" label="Введите ваш пароль" variant="outlined" />
                <Button type="submit" label="submit">Register</Button>



        </form>


    )
}
export default Register