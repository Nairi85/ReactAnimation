import React, { useState } from 'react';
import './Animation1.styles.css';


const Animation1=()=> {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`block ${isActive ? 'newStyle' : ''}`}
      onClick={handleClick}
    >
      Click me!
    </div>
  )}

  export default Animation1


