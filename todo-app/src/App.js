import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  function displayData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  }
  useEffect(() => {}, []);

  const element = data.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>
        {element.address.street}, {element.address.city}
      </td>
      <td>{element.company.name}</td>
      <td>
        <a
          href="https://github.com/awaisahmad64"
          variant="primary"
          className="btn btn-primary px-2"
        >
          <i className="fa-solid fa-eye px-2"></i>View Profile
        </a>
      </td>
    </tr>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Full Address</th>
                <th>Company Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{element}</tbody>
          </table>
          <Button variant="primary" onClick={displayData}>
            Display Data
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
