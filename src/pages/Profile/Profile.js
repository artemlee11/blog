import React, { useState, useContext, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import {Context} from "../../context/Context";
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const Profile = () => {
    const {user, dispatch} = useContext(Context)
    const [age, setAge] = useState(user.age)
    const [gender, setGender] = useState(user.gender)
    const [username, setUsername] = useState(user.username)
    const [password, setPassword] = useState("")
    const [edit , editMode] = useState(false)

    const handleEdit = () => {
        editMode(true);
        setAge(user.age)
        setUsername(user.username)
        setGender(user.gender)
        
    }

    const handleDelete = () => {
        try{
            axios.delete(`http://localhost:3004/users/${user.id}`)
            localStorage.clear()
            dispatch({type: "USER_DELETE"})
            window.location.assign("/")
        } catch(err){
            console.log(err)
        }
    }

    const handleUpdate = async () => {
       try {
           const res = await axios.put(`http://localhost:3004/users/${user.id}`, {
               password,
               email : user.email,
               gender,
               age,
               username
            })
            dispatch({type:"USER_UPDATE", payload: res.data})
            editMode(false)
        } catch(err) {
            console.log(err)
        }}
  
    return (
        <div>
            <Card sx={{ maxWidth: 345}}>
                <CardContent>
                    {edit ? <h2>Редактирование данных профиля</h2> : <h2>Мой профиль</h2>}
                    {edit ? (
                        <TextField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="post-title"
                        label="Новое имя пользователя"
                        variant="outlined"
                        style={{ marginBottom: 10}}
                        />
                    ) : (
                        <Typography gutterBottom variant="h5" component="div">
                            {user.username}
                        </Typography>
                    )}
                    {edit ? (
                            <TextField
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            id="post-title"
                            label="Укажите новый возраст"
                            variant="outlined"
                            style={{ marginBottom: 10}}
                            />
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                        Возраст: {user.age}
                        </Typography>
                    )}
                    {edit ? (
                        <TextField
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        id="post-title"
                        label="Новое имя пользователя"
                        variant="outlined"
                        style={{ marginBottom: 10}}
                        />
                    ) : (
                        <Typography gutterBottom variant="h5" component="div">
                            Пол:{user.gender}
                        </Typography>
                    )}
                    {edit ? 
                        <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="post-title"
                        label="Подтвердите ваш пароль"
                        variant="outlined"
                        style={{ marginBottom: 10}}
                        />
                     : "" }
                </CardContent>
                <CardActions>
                {edit ? "" : 
            <Button size="small" onClick={handleDelete}>Удалить</Button> }
            {edit ? "" : 
            <Button size="small" onClick={handleEdit}>Редактировать</Button> }
            {edit ?
            <Button size="small" onClick={handleUpdate}>Сохранить</Button> : "" }
                </CardActions>
            </Card>
        </div>
    );
};

export default Profile;