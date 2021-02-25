import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Avatar, Button } from '../index';
import { Colors } from '../../constants';
import styles from './navbar.module.scss';
import { ReactComponent as MenuIcon } from '../../assets/svgs/menu.svg';
import Drawer from './Drawer';
import { useAuth } from '../../features/auth/Auth';
import NavItem from './components/NavItem/NavItem'
import ConnectedUserArea from './components/ConnectedUserArea/ConnectedUserArea';

const Navbar = ({ items = [], isLoggedIn, userName }) => {
  

  const auth = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.row}>
          {isLoggedIn && (
            <div className={styles.menuIcon}>
              <MenuIcon
                width={40}
                fill={Colors.White}
                onClick={toggleDrawer(true)}
              />
              <Drawer {...{ items, isOpen, toggleDrawer, isLoggedIn }} />
            </div>
          )}
          <Link to={'/'}>
            <Logo />
          </Link>
          <div className={styles.itemsArea}>{items.map(NavItem)}</div>
          <ConnectedUserArea {...{ userName }} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
