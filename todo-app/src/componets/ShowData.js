import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowData(props) {
    return (
        <div className='item'> 
         <p>{props.task}</p><p> <i class="fas fa-trash-alt text-danger cursor"></i></p>
         </div>
    );
}

export default ShowData;