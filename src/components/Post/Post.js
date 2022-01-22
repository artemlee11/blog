import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
// с помощью map отобразить разметку внутри div с данными posts

const fetchData = () => {
    return axios.get('http://localhost:3004/posts')
    .then(response => response.data)
}

const Post = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetchData().then(data => setPosts(data))
    })
    
    return (
        <div>
        {posts.map(post => {
            return (
            <div className="item">
                <h1><Link to={`/singlepost/${post.id}`}>{post.postTitle}</Link></h1>
                <p>{post.postDescr}</p>
            </div>
            )
        })
        }
        </div>
    );
};

export default Post;