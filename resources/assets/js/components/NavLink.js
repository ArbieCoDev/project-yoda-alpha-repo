import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

const NavLink = ({ label, to, exact, icon, class_name }) => (
  <Route path={to} exact={exact}>
    {({ match }) => {
      let leftIcon;
      if (icon) {
        leftIcon = <FontIcon className={class_name} >{icon}</FontIcon>;
      }

      return (
        <ListItem
          component={RouterLink}
          active={!!match}
          to={to}
          primaryText={label}
          leftIcon={leftIcon}
        />
      );
    }}
  </Route>
);

export default NavLink;

