import React, { Component } from "react";
import Button from "./Classworks/Button";
import UserName from "./UserName";
import "./App.css";

class App extends Component {
  state = {
    interviewed: false,
    users: [],
  };

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/cfKvpfkYZe?indent=2")
      .then((res) => res.json())
      .then(
        (result) => {
          const converted_user = result.map((post) => {
            return {
              post,
              interviewed: false,
            };
          });
          this.setState({
            isLoaded: true,
            users: converted_user,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  changeUserStatus = (_id) => (event) => {
    let changedUsers = this.state.users.map((guest) => {
      // console.log(guest.post._id, _id);
      if (guest.post._id === _id) {
        guest.interviewed = !guest.interviewed;
      }
      return guest;
    });
    this.setState({ users: changedUsers });
  };

  render = () => {
    const { users, isLoaded } = this.state;
    const { changeUserStatus } = this;

    return (
      <div style={{ textAlign: "center" }}>
        <div id="no-guests">
          {isLoaded ? (
            <h3>{users.length} USERS</h3>
          ) : (
            <h3>
              <b> Loading.................</b>
            </h3>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "400px",
          }}>
          {users.map((user) => {
            let { interviewed } = user;
            return (
              <div
                key={user.post.guid}
                className={
                  interviewed ? "status-interviewed" : "status-not-interviewed"
                }>
                <UserName user={user} />
                <Button
                  changeUserInterviewed={changeUserStatus}
                  user={user}
                  title="My button -> change App state interviewed"
                  style={{
                    width: "400px",
                  }}>
                  Child
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

export default App;
