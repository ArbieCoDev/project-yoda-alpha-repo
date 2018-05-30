import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Student from './Student/Student';
import Teacher from './Teacher/Teacher';
import Admin from './Admin/Admin';
import FileUpload from './ModuleTests/FileUpload';

class MainRouter extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router>
        <div>
          <Route path="/Login" component={Login}/>
          <Route path="/Student" component={Student}/>
          <Route path="/Teacher" component={Teacher}/> 
          <Route path="/Admin" component={Admin}/>
          <Route path="/Modules/FileUpload" component={FileUpload}/>
        </div>
      </Router>
    );
  }
}

export default MainRouter;