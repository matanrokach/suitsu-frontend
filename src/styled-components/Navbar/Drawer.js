import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Logo, Avatar, Button } from '../index';
import { Colors } from '../../constants';
import styles from './navbar.module.scss';
import { ReactComponent as MenuIcon } from '../../assets/svgs/menu.svg';
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useAuth } from '../../features/auth/Auth';

const Drawer = ({ items, isOpen, toggleDrawer, isLoggedIn }) => {

  const DrawerList = ({ items }) => {
    return (
      <div role='presentation' onClick={toggleDrawer(false)}>
        <List>
          {items.map(({ name, path, isPrivate }) => {
            if (!isPrivate || isLoggedIn) {
              return (
                <ListItem button key={path}>
                  <Link to={path}>
                    <ListItemText className={styles.drawerItem}>
                      {name}
                    </ListItemText>
                  </Link>
                </ListItem>
              );
            }

            return null;
          })}
        </List>
      </div>
    );
  };

  return (
    <MUIDrawer anchor={'top'} open={isOpen} onClose={toggleDrawer(false)}>
      {<DrawerList {...{ items }} />}
    </MUIDrawer>
  );
};

export default Drawer;
