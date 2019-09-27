import React from "react";

const User = props => {
  let age = props.age ? props.age : "N/A";

  return (
    <div>
      Name: {props.children} | Age: {age}
    </div>
  );
};

export default User;
