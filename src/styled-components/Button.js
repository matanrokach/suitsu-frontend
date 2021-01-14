import React from 'react';
import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';
import { Colors } from '../constants';

const StyledButtonOutlined = styled(MUIButton)`
	color: ${Colors.Primary};
	border: 1px solid ${Colors.Primary};
	background-color: transparent;
	cursor: pointer;
	padding: 8px;
`;

const StyledButton = styled(StyledButtonOutlined)`
	background-color: ${Colors.Primary};
	color: ${Colors.White};
`;

const Button = ({ children, outlined = false, ...props }) => {
	if (outlined) {
		return <StyledButtonOutlined {...props} variant={'outlined'}>{children}</StyledButtonOutlined>;
	}
	return <StyledButton {...props} variant={'contained'}>{children}</StyledButton>;
};

export default Button;
