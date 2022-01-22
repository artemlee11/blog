import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from 'axios'

// preventDefault()
// дз. Сделать уведомление о том, что пост отправлен
// Отчистить поля после отправки поста

const PostForm = () => {

    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:3004/posts', {
            postTitle : title,
            postDescr : descr
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={title} onChange={e => setTitle(e.target.value)} id="post-title" label="Введите название поста" variant="outlined" />
            <TextField value={descr} onChange={e => setDescr(e.target.value)} id="post-descr" label="Введите описание поста" variant="outlined" />
            <Button type="submit" variant="contained">Опубликовать пост</Button>
        </form>
    );
};

export default PostForm;

