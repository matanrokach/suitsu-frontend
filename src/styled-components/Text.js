import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledText = styled(Typography)`
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Text = ({ children }) => {
	return <StyledText>{children}</StyledText>;
};

export default Text;
