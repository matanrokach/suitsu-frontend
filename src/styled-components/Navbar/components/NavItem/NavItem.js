import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';
import { selectUser } from '../../../../features/auth/authSlice';

const NavItem = ({ name, path, isPrivate }) => {
  const user = useSelector(selectUser);

  const isLoggedIn = !!user.id;

  if (!isPrivate || isLoggedIn) {
    return (
      <Link to={path}>
        <div className={styles.item}>{name}</div>
      </Link>
    );
  }

  return null;
};

export default NavItem;
