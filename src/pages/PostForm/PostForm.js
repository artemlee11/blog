import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/posts", {
      postTitle: title,
      postDescr: descr,
    });
    setTitle("");
    setDescr("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="post-title"
        label="Введите название поста"
        variant="outlined"
      />
      <TextField
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
        id="post-descr"
        label="Введите описание поста"
        variant="outlined"
      />
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        Опубликовать пост
      </Button>
    </form>
  );
};

export default PostForm;
