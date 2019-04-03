import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { getUser } from "../../services/AuthService";
class ChangePasswordForm extends Component {
  state = {
    formData: {
      old: null,
      new: null
    },
    err: null
  };

  handleLoginRequest = passwords => {
    let url = `${apiUrl}/change-password`;

    console.log({ email: getUser().email, passwords });
    console.log(url);
    fetch(url, {
      method: "PATCH",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: getUser().email, passwords })
    })
      .then(res => res.json())
      .then(data => {
        this.props.changeActivePage("home");
      })
      .catch(e => console.log(e));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.handleLoginRequest(this.state.formData);
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div class="mycontainer">
            <div className="form">
              {/* <div className="avatar-wrapper">
                <img src={avatar} className="avatar" />
              </div> */}
              <h2>تغير البااسورور</h2>
              <input
                name="old"
                className="form-control"
                type="password"
                onChange={this.handleChange}
                placeholder="االباسورور القديمة"

              />
              <br></br>

              <div className="form-group">
                <input
                  name="new"
                  type="password"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="عيدها مره ثانيه"
                />
              </div>
              <button type="submit" className="btn btn-outline-warning">
                غير
          </button></div>

          </div>
        </form>
      </div>
    );
  }
}

export default ChangePasswordForm;
