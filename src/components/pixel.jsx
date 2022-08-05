import React, { useEffect, useState } from "react";

const Pixel = ({ content }) => {
  const [colorChange, setcolorChange] = useState(9);
  useEffect(() => {
    return () => {};
  }, [colorChange]);

  const changeColor = (e) => {
    e.target.style.backgroundColor = "red";
    setcolorChange((colorChange) => {
      colorChange + 1;
    });
    console.log(colorChange);
  };

  return (
    <div
      onMouseOver={changeColor}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
};

export default Pixel;
