import React, { Component } from "react";
import UserForm from "./UserForm";
import UserCard from "./UserCard";

import JumbotronFluid from "./elements/JumbotronFluid";
import UserList from "./UserList";
import serialize from "form-serialize";
import "../App.css";

class App extends Component {
  // Move constructor and componentDidMount code to App.
  constructor() {
    super();
    this.state = {
      users: [],
      isFetching: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({
      isFetching: true
    });
    fetch("https://reqres.in/api/users?delay=3")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  // New add user action
  onAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, {
      hash: true
    });

    // Create headers to set the content type to json
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // Set options, and stringify the body to JSON
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(body)
    };

    // Before performing the fetch, set isFetching to true
    this.setState({
      isFetching: true
    });

    fetch("https://reqres.in/api/users", options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users, json]
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  render() {
    // Send users and isFetching as props to UserList
    const { users, isFetching, error } = this.state;

    return (
      <div className="App">
        <JumbotronFluid />
        <UserList users={users} isFetching={isFetching} />
        <br />
        <UserForm onSubmit={this.onAddUser} error={error} />
      </div>
    );
  }
}

export default App;
