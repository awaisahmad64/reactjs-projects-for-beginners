import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowData(props) {
    return (
         <p className="item">{props.task}</p>

    );
}

export default ShowData;