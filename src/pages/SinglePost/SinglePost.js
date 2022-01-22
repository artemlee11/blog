import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import TextField from '@mui/material/TextField';

// Удалить пост по нажатию кнопки удалить
// onClick, delete axios, delete post react api

// После удаления поста, переходить на главную

// 1. После кнопки появляются инпуты, предназначенные для редактирования соотве-го поста
// Создать состояние, которое принмает два значения; 
// 2. 

const fetchData = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`)
    .then(response => response.data)
}

const SinglePost = () => {

    const [post, setPost] = useState({})
    const [changeMode, setChangeMode] = useState(false)
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')

    const {id} = useParams()

    useEffect(()=> {
        fetchData(id).then(data => setPost(data))
    })

    const handleDeletePost = () => {
        axios.delete(`http://localhost:3004/posts/${id}`)
    }

    const handleChangePost = () => {
        setChangeMode(true)
        setTitle(post.postTitle)
        setDescr(post.postDescr)
    }

    const handleUpdatePost = () => {
        // редактировать пост. 
    }

    return (
        <div>
            <h1>
                {changeMode ? 
            <TextField value={title} onChange={e => setTitle(e.target.value)} id="post-title" label="Введите название поста" variant="outlined" />
            : post.postTitle }
            </h1>
            <p>
                {changeMode ? 
            <TextField value={descr} onChange={e => setDescr(e.target.value)} id="post-descr" label="Введите описание поста" variant="outlined" />
            : post.postDescr }</p>
            <button onClick={handleDeletePost}>Удалить</button>
            <button onClick={handleChangePost}>Редактировать</button>
            {changeMode ? <button onClick={handleUpdatePost}>Сохранить</button> :  "" }
        </div>
    );
};

export default SinglePost;