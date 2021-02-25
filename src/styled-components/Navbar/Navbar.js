import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Avatar, Button } from '../index';
import { Colors } from '../../constants';
import styles from './navbar.module.scss';
import { ReactComponent as MenuIcon } from '../../assets/svgs/menu.svg';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const Navbar = ({ items = [], isLoggedIn, userName }) => {
	const NavItem = ({ name, path, isPrivate }) => {

		if (!isPrivate || isLoggedIn) {
			return (
				<Link to={path}>
					<div className={styles.item}>
						{name}
					</div>
				</Link>
			);
		}

		return null;
	};

	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {

		setIsOpen(open);
	};

	const DrawerList = ({ items }) => {
		return (
			<div
				role="presentation"
				onClick={toggleDrawer(false)}
			>
				<List>
					{items.map(({ name, path, isPrivate }) => {
						if (!isPrivate || isLoggedIn) {
							return (
								<ListItem button key={path}>
									<Link to={path}>
										<ListItemText className={styles.drawerItem} >{name}</ListItemText>
									</Link>
								</ListItem>
							)
						}

						return null;
					})}
				</List>
			</div>
		)
	};

	return (
		<div className={styles.container}>
			<Container>
				<div className={styles.row}>
					{isLoggedIn && <div className={styles.menuIcon}>
						<MenuIcon width={40} fill={Colors.White} onClick={toggleDrawer(true)} />
						<Drawer anchor={'top'} open={isOpen} onClose={toggleDrawer(false)}>{<DrawerList {...{ items }} />}</Drawer>
					</div>}
					<Link to={'/'}>
						<Logo />
					</Link>
					<div className={styles.itemsArea}>
						{items.map(NavItem)}
					</div>
					{userName ? <Link to='/profile'>
						<Avatar name={userName} />
					</Link> : null}
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
