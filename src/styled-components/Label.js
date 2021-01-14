import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
	margin: 2px;
	font-size: 18px;
`;

const Label = ({ children, ...props }) => {
	return (
		<StyledLabel {...props}>
			{children}
		</StyledLabel>
	);
};

export default Label;