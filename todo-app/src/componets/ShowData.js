import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowData(props) {
  return (
    <>
      <div className="item">
        <p>{props.task}</p>
        <p>
          {' '}
          <input type="checkbox" checked={props.checked} />{' '}
          <i
            onClick={() => {
              props.onSelect(props.id);
            }}
            className="fas fa-trash-alt text-danger cursor"
          ></i>
        </p>
      </div>
    </>
  );
}

export default ShowData;
