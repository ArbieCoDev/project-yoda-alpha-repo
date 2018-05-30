import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavLink from '../NavLink';
import $ from 'jquery';
import profileLogo from'../../../images/default_profile.png';
import {
  Avatar,
    Divider,
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn,
    Card, 
    CardTitle, 
    CardText,
    Button,
    FontIcon
  } from 'react-md';

import StudentHome from './student-home';
import StudentCourses from './student-courses';
import StudentQuizzes from './student-quizzes';
import StudentAssignments from './student-assignments';
import StudentGrades from './student-grades';
import StudentPortfolio from './student-portfolio';
import StudentMessages from './student-messages';
import StudentTodo from './student-todo';
import StudentHomeroom from './student-homeroom';
import StudentCourse1 from './student-course1';
import './Student.css';

const navItems = [{
  exact: true,
  label: 'Dashboard',
  to: '/Student/',
  icon: 'home',
  class_name: 'nav_item'
},
{
  label: 'Homeroom',
  to: '/Student/Homeroom',
  icon: 'school',
  class_name: 'nav_item_homeroom'
},
{
  label: 'LEGO Robotics EV3',
  to: '/Student/Lego-Robotics-EV3',
  icon: 'school', 
  class_name: 'nav_item_robotics'
},
{
  label: 'To Do List',
  to: '/Student/Todo',
  icon: 'list',
  class_name: 'nav_item'
},
{
  label: 'Grades',
  to: '/Student/Grades',
  icon: 'grade',
  class_name: 'nav_item'
},
{
  label: 'Portfolio',
  to: '/Student/Portfolio',
  icon: 'folder_shared',
  class_name: 'nav_item'
},
{
  label: 'Messages',
  to: '/Student/Messenger',
  icon: 'message',
  class_name: 'nav_item'
},
];



class Student extends Component {

  constructor(props) {
    super();

    this.state = { toolbarTitle: this.getCurrentTitle(props),redirect: false };
    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
  }

  getCurrentTitle = ({ location: { pathname } }) => {
    let lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);

    if(lastSection === ""){
      lastSection = 'Student Dashboard';
    }
    $('#main-toolbar-title').text(lastSection);


  };
  
  logout(){
    this.setState({redirect:true});
    window.sessionStorage.removeItem("token");
  }

  


  render() {

    if(!window.sessionStorage.getItem("token")){
      return(
          <Redirect to={'../Login'} />
      )
    }

    if(this.state.redirect){
      if(!window.sessionStorage.getItem("token")){
        return(
            <Redirect to={'../Login'} />
        )
      }
    }
      
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle=""
            toolbarTitle="Student Dashboard"
            toolbarId="main-toolbar"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
            drawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            drawerHeaderChildren={[
              <Avatar
                src={profileLogo}
                  role="presentation"
                  iconSized
                  style={{ alignSelf: 'center', marginLeft: 16, marginRight: 16, flexShrink: 0,width:'70px',height:'70px'}}
              />,
              <div style={{ marginTop: 60,}}>
                <p className="profile-name" >Demo Account</p>
                <p className="profile-mail">test+a@yoda.com</p>
                <Button style={{margin:5}} icon secondary swapTheming onClick={this.logout} >power_settings_new</Button>
                <Button style={{margin:5}} icon primary swapTheming>edit</Button>
              </div>
            ]}
          >
            <Switch key={location.key}>
              <Route exact path="/Student/" location={location} component={StudentHome} />
              <Route path="/Student/Courses" location={location} component={StudentCourses} />
              <Route path="/Student/Quizzes" location={location} component={StudentQuizzes} />
              <Route path="/Student/Assignments" location={location} component={StudentAssignments} />
              <Route path="/Student/Grades" location={location} component={StudentGrades} />
              <Route path="/Student/Portfolio" location={location} component={StudentPortfolio} />
              <Route path="/Student/Messenger" location={location} component={StudentMessages} />
              <Route path="/Student/Todo" location={location} component={StudentTodo} />
              <Route path="/Student/Homeroom" location={location} component={StudentHomeroom} />
              <Route path="/Student/Lego-Robotics-EV3" location={location} component={StudentCourse1} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default Student;
