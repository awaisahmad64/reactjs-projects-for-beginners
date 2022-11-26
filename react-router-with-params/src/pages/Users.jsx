import { useState } from "react";
import React from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import User from "./User";


function Users() {
  const [users, setUsers] = useState([]);
  function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUsers(json))
  }
  useEffect(()=>{
      getUsers();
  },[]);
  return <div>{users.map(usersData=>{
    return(
   <p key={usersData.id}><Link to={`/user/${usersData.id}`} element={<User />}>{usersData.id}{usersData.name}</Link></p>
    )
  })}</div>;
}

export default Users;
