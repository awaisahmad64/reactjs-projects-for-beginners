import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ToDo.css';
import ShowData from './ShowData';

function ToDo() {
  const [task, setTask] = useState('add Task');
  const [data, setData] = useState([]);
  const onChangeHandler = e => {
    setTask(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);
    setTask('');
  }
  return (
    <div className="bg-lightblue">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <form className="pt-5 pb-2" onSubmit={submitHandler}>
              <div className="d-flex">
                <input className="form-control rounded-0 mr__2" value={task} onChange={onChangeHandler}></input>
                <Button type='submit' variant="primary" className="btn__bg">
                  add
                </Button>
              </div>
            </form>
            <div>
              {
                data.map((value, index)=>{
                 return <ShowData
                   key={index}
                   id={index}
                   task={value}
              />
                })
              }
              
              {console.log(data)}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
// rfce react functional components export
