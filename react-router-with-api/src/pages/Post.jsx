import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Post() {
  const [postData, setPost] = useState({id:{}});
  const { id } = useParams();
  function getPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setPost(data);
      });
  }
  useEffect(() => {
    getPost();
  }, []);
  return <div>{postData.map(element=>(
    <h2>{element.id}</h2>
  ))}</div>
}

export default Post;
