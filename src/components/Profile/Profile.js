import React, { useState, useContext, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import {Context} from "../../context/Context";
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const [ email ] = useState("")
    const [ login ,setLogin] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const {user} = useContext(Context)
    const {id} = useParams()
    const [changeMode, setChangeMode] = useState(false)

    const handleChangePost = () => {
        setChangeMode(true)
        setLogin(user.userLogin)
        setAge(user.userAge)
        setGender(user.userGender)
    }

    const handleUpdatePost = async () => {
        await axios.put(`http://localhost:3004/users/${id}`, {
            userLogin : login,   
            userAge : age,
            userGender : gender
         })
         setLogin("")
         setAge("")
         setGender("")
         setChangeMode(false)
      }
  
    return (
        <div className='profile'>
            <h1 className='profile-title'>Ваш Профиль</h1>
            <h3>Ваша почта: | {user.email} </h3>
            <h3>Ваш логин: | {user.username} </h3>
            <h3>Ваш возраст: | {user.age}</h3>
            <h3>Ваш пол: | {user.gender}</h3>

            <p>
            {changeMode ? 
            <TextField 
            value={login} 
            onChange={e => setLogin(e.target.value)} 
            id="post-descr"
            label="Введите новый логин" 
            variant="outlined" />
            : user.userLogin }
            </p>

            <h1>
            {changeMode ? 
            <TextField 
            value={age} 
            onChange={e => setAge(e.target.value)} 
            id="post-title" 
            label="Введите новый возраст" 
            variant="outlined" />
            : user.userAge}
            </h1>

            <p>
            {changeMode ? 
            <TextField 
            value={gender} 
            onChange={e => setGender(e.target.value)} 
            id="post-descr"
            label="Введите новый пол" 
            variant="outlined" />
            : user.userGender }
            </p>
            
            {changeMode ? "" : 
            <button onClick={handleChangePost}>Редактировать</button> }

            {changeMode ? 
            <button onClick={handleUpdatePost}>Сохранить</button> : "" }
        </div>
    );
};

export default Profile;