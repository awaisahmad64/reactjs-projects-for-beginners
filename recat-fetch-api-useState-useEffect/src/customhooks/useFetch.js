import React from 'react';
import { useEffect, useState } from 'react';
function useFetch(url) {
  const [data, setData] = useState([]);
//   function displayData() {
    //'https://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
//   }
  useEffect(() => {}, []);
  return data;
}

export default useFetch;
