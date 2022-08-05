import React from "react";
import Pixel from "./pixel";

const Screen = () => {
  return Array.from({ length: 10000 }, (e, item) => item).map((key, value) => {
    return <Pixel content={key} />;
  });
};

export default Screen;
