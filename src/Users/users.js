import React, { Component } from "react";
import User from "./user";

class Users extends Component {
  state = {
    users: [
      { name: "John", age: 51 },
      { name: "Nick", age: 43 },
      { name: "Mark", age: 37 },
      { name: "Vince", age: 34 },
      { name: "Bob", age: 42 },
      { name: "Brian", age: 57 }
    ],
    title: "Users List"
  };

  makeMeYounger = () => {
    const newState = this.state.users.map(user => {
      const tempUser = user;
      tempUser.age -= 10;
      return tempUser;
    });
    this.setState({
      newState
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.makeMeYounger}>Make us 10 years younger</button>
        <br />
        <h1>{this.state.title}</h1>
        {this.state.users.map(user => (
          <User key={user.name} age={user.age}>
            {user.name}
          </User>
        ))}
      </div>
    );
  }
}

export default Users;
