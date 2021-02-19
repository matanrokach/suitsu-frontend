import React from 'react';
import styled from 'styled-components';
import styles from './title.module.scss';

const StyledLabel = styled.label`
	margin: 2px;
	font-size: 18px;
`;

const Title = ({ children, ...props }) => {
	return (
		<div className={styles.text} {...props}>
			{children}
		</div>
	);
};

export default Title;