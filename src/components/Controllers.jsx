import React, { useState } from "react";

const Controllers = () => {
  const [size, setSize] = useState({
    width: 10,
  });

  const handleResize = (e) => {
    console.log(e.target.name);
  };

  return (
    <div>
      <div id="input_container">
        <input
          onChange={handleResize}
          type="range"
          name="width"
          id="width"
          min={size.width}
          max={100}
        />
      </div>
    </div>
  );
};

export default Controllers;
