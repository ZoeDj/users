import React from "react";

const User = props => {
  let age = props.age ? props.age : "N/A";

  return (
    <li>
      <span>
        Name: {props.children} | Age: {age}
      </span>
      <br />
      <input onChange={props.changeEvent} value={props.children} />
      <button onClick={props.deleteEvent}>Delete</button>
    </li>
  );
};

export default User;
