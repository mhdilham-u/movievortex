import React from "react";

const Button = (props) => {
  return (
    <a
      className="px-8 py-2 border border-white hover:bg-primary hover:border-primary transition-all duration-300 rounded-full"
      href="#"
    >
      {props.name}
    </a>
  );
};

export default Button;
