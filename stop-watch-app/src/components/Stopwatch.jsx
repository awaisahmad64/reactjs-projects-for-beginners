import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
let intervalAdjust = undefined;
function Stopwatch() {
  // set watch state
  const [watch, setWatch] = useState(0);
  // set started stated usef for disabled enable button
  const [started, setStarted] = useState(false);
  // onclick start button time will start and setStarted true, will pass to disabled, will disable button
  const startWatch = () => {
    intervalAdjust = setInterval(() => {
      setWatch((prevSecond) => prevSecond + 1);
      setStarted(true);
    }, 1000);
  };
  // onclick stop call will clear setInterval
  const stopWatch = () => {
    clearInterval(intervalAdjust);
    setStarted(false);
  };
  // onclick reset button will setWatch zero, clear setInterval and do disabled false.
  const resetWatch = () => {
    setWatch(0);
    clearInterval(intervalAdjust);
    setStarted(false);
  };
  return (
    <Container className="mx-auto">
      <Row className='mt-5'>
        <Col className='mx-auto'>
          <h1 className="text-center">STOP WATCH APP</h1>
          <h1 className="text-center ">{watch}</h1>
          <div className='text-center'>
          <Button
            className="px-4 mx-2"
            variant="outline-success"
            disabled={started}
            onClick={startWatch}
          >
            Start
          </Button>
          <Button
            className="px-4 mx-2"
            variant="outline-info"
            onClick={stopWatch}
          >
            Stop
          </Button>
          <Button
            className="px-4 mx-2"
            variant="outline-danger"
            onClick={resetWatch}
          >
            Reset
          </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Stopwatch;
