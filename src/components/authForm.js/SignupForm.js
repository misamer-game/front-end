import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setUser } from "../../services/AuthService";
import avatar from './signup.png';

class SignupForm extends Component {
  state = {
    formData: {
      email: null,
      password: null,
      password_confirmation: null
    },
    err: null
  };

  handleLoginRequest = user => {
    let url = `${apiUrl}/sign-up`;

    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ credentials: user })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) this.setState({ err: data.error });
        else {
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
          <div className="alert alert-warning"> {this.state.err} </div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
           <div class="mycontainer">
              <div className="form">
                    <div className="avatar-wrapper">	
                    <img src={avatar} className="avatar"/> 
                     </div>
                     <br></br>
                     <h2>PLEASE SIGNUP</h2>
                    <div className="form-group">
                     <input
                     name="email"
                     className="form-control"
                     onChange={this.handleChange}
                     placeholder="Email"
                    />
                    </div>
                    <div className="form-group">
                      <input
                       name="password"
                       className="form-control"
                       type="password"
                        onChange={this.handleChange}
                     />
                     </div>

                  <label>Password Confirmation</label>
                      <input
                      name="password_confirmation"
                      className="form-control"
                      type="password"
                      onChange={this.handleChange}
                        />
                        <br></br>
                         <button type="submit" className="btn btn-outline-warning">
                  Login
                 </button>
                       </div>
                 </div>
                 </form>
                  </div>
    );
  }
}

export default SignupForm;
