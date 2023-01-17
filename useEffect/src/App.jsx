import { useState, useEffect, useRef } from 'react';
function App() {
  const [count, setCount] = useState({ initCount: 0 });
  //1. Define the reference to access the element
  const elementRef = useRef();
  useEffect(() => {
    document.title = count.initCount;
  }, [count]);
  useEffect(() => {
    //3. After Mounting, (element.current) points to the DOM element.
    console.log(elementRef.current);
  }, []);
  return (
    <>
      <h1>Hello</h1>
      //2. Assign the reference to ref attribute to the element
      <div ref={elementRef}>I'm a useRef Element/div.</div>
      <p>You clicked {count.initCount} times.</p>
      <button
        onClick={() =>
          setCount((prev) => {
            return { ...prev, initCount: count.initCount + 1 };
          })
        }
      >
        Count
      </button>
    </>
  );
}

export default App;
