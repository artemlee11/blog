// import React, { useState } from 'react';
// import { TextField } from '@mui/material'
// import Button from '@mui/material/Button'
// import axios from 'axios'

// const login = () => {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleLogin = async (e) => {
//         e.preventDefault()
//         try{
//             const res = await axios.post('http://localhost:3004/login/',{
//                 email,
//                 password
//             })
//             console.log(res.data.user)
            
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
//     return (
//         <div>
//        <form onSubmit={handleLogin}>
//             <TextField required value={nickname} onChange={e => setNickname(e.target.value) } id="email-register" label="Введите логин" variant="outlined" />
//             <TextField required type="password" value={password} onChange={e => setPassword(e.target.value) } id="email-register" label="Введите пароль" variant="outlined" />
//             <Button type="submit" label="submit">Register</Button>
//        </form>
//        <h1>Логин:{user.nickname} </h1>
//        <h1>Возраст: {user.age}</h1>
    

//         </div>
//     );
// };

// export default login;