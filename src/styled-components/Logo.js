import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  color: #fff;
  display: inline-block;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
`;

const Logo = (props) => {
  return <StyledLogo>{'SUITS-U'}</StyledLogo>;
};

export default Logo;
