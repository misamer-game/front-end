import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setUser } from "../../services/AuthService";
import avatar from './login.png';
import SignupForm from "./SignupForm";

class SigninForm extends Component {
  state = {
    formData: {
      email: null,
      password: null
    },
    err: null,
  };

  handleLoginRequest = user => {
    let url = `${apiUrl}/sign-in`;

    console.log(url);
    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status > 200) this.setState({ err: data.message });
        else {
          this.setState({ err: null });
          setUser(data);
          this.props.onSignin();
        }
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
        {this.state.err ? (
          <div className="alert alert-danger"> {this.state.err} </div>
        ) : (
            ""
          )}

        <form onSubmit={this.handleSubmit}>
          <div class="mycontainer">
            <br></br>
            <br></br>
            <div className="form">
              <div className="avatar-wrapper">
                <img src={avatar} className="avatar" />
              </div>
              <br></br>

              <h2>الله حيهم</h2>
              <div className="form-group">
                <input
                  name="email"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="بريد علكتنروني"
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="باسورور"
                  onChange={this.handleChange}
                />
              </div>
              <div className="buttonPage">
                <button type="submit" className="btn btn-outline-warning">
                  تفضل </button>
                {/*                   
                <button className="btn btn-outline-warning">
                  ماسجلت ؟
          </button> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SigninForm;
