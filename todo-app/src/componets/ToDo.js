import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ToDo.css';

function ToDo() {
  return (
    <div className="bg-lightblue">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <form className="pt-5 pb-2">
              <div className="d-flex">
                <input className="form-control rounded-0 mr__2"></input>
                <Button variant="primary" className="btn__bg">
                  add
                </Button>
              </div>
            </form>
            <div>
              <p className="item">Hello</p>
              <p className="item">Hello</p>
              <p className="item">Hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
// rfce react functional components export
