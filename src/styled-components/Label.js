import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  margin: 2px;
  font-size: 18px;
`;

const Label = ({ children, size, ...props }) => {
  return (
    <StyledLabel {...props} style={{ ...props.style, fontSize: size }}>
      {children}
    </StyledLabel>
  );
};

export default Label;
