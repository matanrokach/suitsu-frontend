import React from 'react';
import styled from 'styled-components';
import MUITextField from '@material-ui/core/TextField';

const StyledInput = styled(MUITextField)`
  border-color: #aaaaaa;
  padding: 5px;
`;

const Input = ({ ...props }) => {
  return <StyledInput {...props} variant={'outlined'}></StyledInput>;
};

export default Input;
