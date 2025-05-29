import axios from 'axios';
import React, { useRef, useState } from 'react';

const Uncontrolled = () => {
 const inputRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        ref={inputRef}
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="p-2 bg-green-500 text-white rounded"> Submit
      </button>
    </form>
  );
};

export default Uncontrolled;
