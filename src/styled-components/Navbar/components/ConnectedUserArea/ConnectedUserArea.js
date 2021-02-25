import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MUIMenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../features/auth/Auth';
import { Avatar } from '../../../../styled-components';

const ConnectedUserArea = ({ userName }) => {
  const auth = useAuth();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      label: 'Profile',
      onClick: () => {
        history.push('/profile');
        handleClose();
      },
    },
    {
      label: 'Logout',
      onClick: () => {
        auth.logout();
        handleClose();
      },
    },
  ];

  const MenuItem = (item) => (
    <MUIMenuItem onClick={item.onClick}>{item.label}</MUIMenuItem>
  );

  return (
    <>
      {userName ? (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Avatar name={userName} />
        </div>
      ) : null}
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map(MenuItem)}
      </Menu>
    </>
  );
};

export default ConnectedUserArea;
