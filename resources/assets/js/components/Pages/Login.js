import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Card, CardTitle, CardText, Slider,TextField,Button  } from 'react-md';
import {PostData} from '../services/PostData';
import {API_ROOT} from '../Services/ApiService';
import './Login.scss'


export default class Login extends Component {
    
  constructor(props){

      super(props);
      
      this.state ={
          username:'',
          password:'',
          redirect: false,
          role:false
      }

      this.login = this.login.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.setRoleRedirection = this.setRoleRedirection.bind(this);
      this.verifyUserToken = this.verifyUserToken.bind(this);
      
   }

   login(){
       
    var formData = new FormData();
    formData.append("email", this.state.username);
    formData.append("password", this.state.password);

    axios
      .post(`${API_ROOT}/users/login`, formData)
      .then(json => {
        if (json.data.data.auth_token) {
            var formData = new FormData();
            formData.append("token", json.data.data.auth_token);
            axios
                .post(`${API_ROOT}/users/getDetails`, formData)
                .then(json => {
                    window.sessionStorage.setItem("token", json.data.result.auth_token);
                    this.setState({redirect:true});
                    this.setState({role:json.data.result.role});
                });
            }else{
                alert('invalid credentials');
            }
      })
      .catch(error => {
        alert(`An Error Occured! ${error}`);
        $("#login-form button")
          .removeAttr("disabled")
          .html("Login");
      });
   }


   onChangeUsername(value){
    this.setState({username:value});
   }

   onChangePassword(value){
    this.setState({password:value});
   }

   verifyUserToken(){
    var formData = new FormData();
    formData.append("token", window.sessionStorage.getItem("token"));
    axios
        .post(`${API_ROOT}/users/getDetails`, formData)
        .then(json => {
            if(json.data.result){
                this.setState({role:json.data.result.role});
                this.setState({redirect:true});
            }else{
                window.sessionStorage.removeItem("token");
            }
            
        });
    }
   

   setRoleRedirection(){
       switch(this.state.role){
           case 0:
               return "Admin";
           case 1:
               return "Teacher";
           case 2:
               return "Student";
           default:
               return false;
       }
   }

  render() {

    if(this.state.redirect && window.sessionStorage.getItem("token")){
        return(
            this.setRoleRedirection() != false ? <Redirect to={this.setRoleRedirection()} /> : false
        )
    }

    if(window.sessionStorage.getItem("token")){
        this.verifyUserToken();
    }

    return (
    <div className="login-div md-grid">
        <Card className="login-card md-block-centered md-cell--3">
            <CardTitle className="login-card-title" title="Welcome to Project Yoda" />
            <CardText>
            <TextField
                id="floating-center-title"
                name="email"
                label="Enter your email"
                lineDirection="center"
                placeholder=""
                className="md-cell-6"
                onChange={this.onChangeUsername}
            />
            <TextField
                id="floating-password"
                name="password"
                label="Enter your password"
                type="password"
                className="md-cell-6"
                onChange={this.onChangePassword}
             />
             <div className="login-button">
                <Button raised primary swapTheming onClick={this.login}>Login</Button>
             </div>
            </CardText>
        </Card>
    </div>
    )
  }
}
