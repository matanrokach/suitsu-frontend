import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Logo, Avatar, Button } from './index';
import { Colors } from '../constants';

const StyledNavBar = styled.div`
	box-sizing: border-box;
	display: flex;
	background-color: ${Colors.Primary};
	padding: 15px 10px;
	align-items: center;
	justify-content: center;
`;

const StyledNavItemsArea = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	/* padding-left: 20px; */
`;

const StyledNavItem = styled.div`
	color: #fff;
	padding: 10px 20px;
	margin: 0 15px;
	border: 1px solid #fff;
	border-radius: 7px;
	display: inline-block;
	text-decoration: none;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Navbar = ({ items = [], isLoggedIn, userName }) => {
	const NavItem = ({ name, path, isPrivate }) => {

		if (!isPrivate || isLoggedIn) {
			return (
				<Link to={path}>
					<StyledNavItem>
						{name}
					</StyledNavItem>
				</Link>
			);
		}

		return null;
	};

	return (
		<StyledNavBar>
			<Container>
				<Row>
					<Link to={'/'}>
						<Logo />
					</Link>
					<StyledNavItemsArea>
						{items.map(NavItem)}
					</StyledNavItemsArea>
					{userName ? <Link to='/profile'>
						<Avatar name={userName} />
					</Link> : null}
				</Row>
			</Container>
		</StyledNavBar>
	);
};

export default Navbar;
