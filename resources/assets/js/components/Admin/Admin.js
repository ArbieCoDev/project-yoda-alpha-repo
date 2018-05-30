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

import './Admin.css';

const navItems = [{
  exact: true,
  label: 'Dashboard',
  to: '/Admin/',
  icon: 'home',
  class_name: 'nav_item'
},
{
  label: 'Teachers',
  to: '/Admin/Teachers',
  icon: 'school',
  class_name: 'nav_item_homeroom'
},
{
  label: 'Students',
  to: '/Admin/Students',
  icon: 'grade',
  class_name: 'nav_item'
},
{
  label: 'Users',
  to: '/Admin/Users',
  icon: 'folder_shared',
  class_name: 'nav_item'
},
{
  label: 'Admin Functions',
  to: '/Admin/SuperUser',
  icon: 'message',
  class_name: 'nav_item'
},
];



class Admin extends Component {

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
      lastSection = 'Admin Dashboard';
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
            toolbarTitle="Admin Dashboard"
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
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default Admin;
