import React from "react";
import ReactDOM from "react-dom";
import isNode from "detect-node";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fetchUsers() {
    var component = this;
    fetch("http://jsonplaceholder.typicode.com/users").then(function(resp){
      return resp.json();
    }, function(err){
    }).then(data => {
      component.setState({ users: data });
    });
  }

  render() {
    let users = this.state.users;

    if(!users) {
      this.fetchUsers();

      return <div>No users</div>;
    }

    return <ul>
      {users.map(user => {
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
  }
}

export function createState() {
	return {};
}

export function render(document){
  ReactDOM.render(<title>React App</title>, document.head);

	var div = document.createElement("div");
	document.body.appendChild(div);
	ReactDOM.render(<Users />, div);
}

if(!isNode) {
	render(document);
}
