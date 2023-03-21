import { Transition } from 'react-transition-group';
import { useState, useRef } from 'react';

const duration = 2000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const  Animation2=()=> {
  const [isActive, setIsActive] = useState(false);
     const handleClick = () => {
     setIsActive(!isActive);
   };
  return (
    <div>
      <Transition  in={isActive} timeout={500}>
        {state => (
           <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            I'm a fade Transition!
          </div>
        )}
      </Transition>
      <button onClick={handleClick}>
        Click to Enter
      </button>
    </div>
  );
}

export default Animation2