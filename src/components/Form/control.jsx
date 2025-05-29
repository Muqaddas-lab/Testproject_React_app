import React, { useState } from 'react';      //store input field data in hook {usestate}

const Control = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input
        type="text"value={name}
onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded"> Submit</button>
    </form>
  );
};

export default Control;
