import React from "react";

export const MyFirstComponent = ({ name, age }) => {
  return (
    <div>
      <p>
        Hello {name}! You are {age} years old!{" "}
      </p>
    </div>
  );
};

export default MyFirstComponent;
