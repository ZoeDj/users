import React, { Component } from "react";
import User from "./user";
import UniqueId from "react-html-id";

class Users extends Component {
  constructor() {
    super();
    UniqueId.enableUniqueIds(this);

    this.state = {
      users: [
        { id: this.nextUniqueId(), name: "John", age: 51 },
        { id: this.nextUniqueId(), name: "Nick", age: 43 },
        { id: this.nextUniqueId(), name: "Mark", age: 37 },
        { id: this.nextUniqueId(), name: "Vince", age: 34 },
        { id: this.nextUniqueId(), name: "Bob", age: 42 },
        { id: this.nextUniqueId(), name: "Brian", age: 57 }
      ],
      title: "Users List"
    };
  }

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

  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({ users: users });
  };

  changeUserName = (id, e) => {
    const index = this.state.users.findIndex(user => {
      return user.id === id;
    });

    const user = Object.assign({}, this.state.users[index]);
    user.name = e.target.value;

    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({ users: users });
  };

  render() {
    return (
      <div>
        <button onClick={this.makeMeYounger}>Time Machine</button>
        <br />
        <h1>{this.state.title}</h1>
        <ul>
          {this.state.users.map((user, index) => (
            <User
              key={user.id}
              age={user.age}
              changeEvent={this.changeUserName.bind(this, user.id)}
              deleteEvent={this.deleteUser.bind(this, index)}
            >
              {user.name}
            </User>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
