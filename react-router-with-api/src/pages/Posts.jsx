import React from 'react';
import { useState ,useEffect} from 'react';
function Posts() {
  const [postsData, setPosts] = useState([]);
 
  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((result) => result.json())
      .then((data) => {
        setPosts(data);
      });
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {postsData.map((element) => (
        <h1 key={element.id}> {element.id}</h1>
      ))}
    </div>
  );
}

export default Posts;
