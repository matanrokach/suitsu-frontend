import React from 'react';
import styled from 'styled-components';

const StyledNavItemAvatar = styled.div`
	color: #fff;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 15px;
	border: 1px solid #fff;
	border-radius: 50px;
`;

const StyledAvatarContent = styled.div`
	color: #fff;
	display: block;
	text-decoration: none !important;
`;

const getInitials = (name) => {

	return name.match(/\b(\w)/g).join('');
}

const Avatar = ({ name = 'Matan Rokach' }) => {

	return (
		<StyledNavItemAvatar>
			<StyledAvatarContent>{getInitials(name)}</StyledAvatarContent>
		</StyledNavItemAvatar>
	);
};

export default Avatar;
