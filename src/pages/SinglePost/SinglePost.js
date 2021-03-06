import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import TextField from '@mui/material/TextField';
 
const fetchData = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`)
    .then(response => response.data)
}

const SinglePost = () => {

    const [post, setPost] = useState({})
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')
    const [changeMode, setChangeMode] = useState(false)

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

    const handleUpdatePost = async () => {
      await axios.put(`http://localhost:3004/posts/${id}`, {
        postTitle : title,
        postDescr : descr
       })
       setTitle("")
       setDescr("")
       setChangeMode(false)
    }

    return (
        <div>
            <h1>
            {changeMode ? 
            <TextField 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            id="post-title" 
            label="Введите название поста" 
            variant="outlined" />
            : post.postTitle }
            </h1>

            <p>
            {changeMode ? 
            <TextField 
            value={descr} 
            onChange={e => setDescr(e.target.value)} 
            id="post-descr" 
            label="Введите описание поста" 
            variant="outlined" />
            : post.postDescr }
            </p>

            {changeMode ? "" : 
            <button onClick={handleDeletePost}>Удалить</button> }
            {changeMode ? "" : 
            <button onClick={handleChangePost}>Редактировать</button> }
            {changeMode ?
            <button onClick={handleUpdatePost}>Сохранить</button> : "" }
        </div>
    );
};

export default SinglePost;