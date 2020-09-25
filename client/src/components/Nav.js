import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import AddResourceModal from './AddResourceModal';

// importing buttons
// importing Auth0 hook
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
		color: 'white',
	},
	palette: {
		primary: {
			main: '#82b1ff',
		},
	},
	button: {
		margin: theme.spacing(1.5),
		color: 'white',
	},
}));

function Nav() {
	const classes = useStyles();
	const { isAuthenticated } = useAuth0();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						<Link to="/">
							<h3>
								concat(collective)
						</h3>
						</Link>
					</Typography>
					<AddResourceModal />
					<Button className={classes.button} component={Link} to='/profile'>
						profile
					</Button>
					<Button className={classes.button} component={Link} to='/home'>
						Home
					</Button>
					{/* maybe we can put an icon here  */}
					{isAuthenticated ? <LogoutButton /> : <LoginButton />}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Nav;
