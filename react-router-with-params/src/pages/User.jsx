import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  const [userData, setUser] = useState({});
  function getUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }
  useEffect(() => {
    getUser();
  }, []);
  return <div>
    <p>{userData.id} {userData.name}</p>
  </div>;
}

export default User;
