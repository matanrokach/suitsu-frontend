import React, { useState } from 'react';
import { Popover as MUIPopover } from '@material-ui/core';

const Popover = ({ children, text, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      {...props}
      style={{
        ...(props.style && props.style),
        display: 'inline-block',
      }}
    >
      <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        {children}
      </div>
      <MUIPopover
        style={{ pointerEvents: 'none', padding: 5 }}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={() => {}}
        disableRestoreFocus
      >
        {text}
      </MUIPopover>
    </div>
  );
};

export default Popover;
