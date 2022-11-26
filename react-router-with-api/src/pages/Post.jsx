import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Post() {
  const [postData, setPost] = useState({});
  const { id } = useParams();
  function getPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setPost(data);
        console.log(postData)
      });
  }
  useEffect(() => {
    getPost();
  }, []);
  return <div>{postData}</div>
}
export default Post;
