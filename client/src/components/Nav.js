// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

// import AddResourceModal from './AddResourceModal';

// // importing buttons
// // importing Auth0 hook
// import { useAuth0 } from '@auth0/auth0-react';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import Button from '@material-ui/core/Button';

// import { Link } from 'react-router-dom';


// {/* <i class="fas fa-home"></i> */}

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 		color: 'white'
// 	},
// 	link: {
// 		margin: theme.spacing(1, 1.5),
// 		color: 'white',
// 	},
// 	palette: {
// 		primary: {
// 			main: '#82b1ff',
// 		},
// 	},
// 	button: {
// 		margin: theme.spacing(1.5),
// 		color: 'white',
// 	},
// }));


// // making thing thing responsive 
// function Nav() {
// 	const classes = useStyles();
// 	const { isAuthenticated } = useAuth0();

// 	return (
// 			<AppBar position='static'>
// 				<Toolbar>
// 					<Typography variant='h6' className={classes.title}>
// 						<Link to="/" className={classes.title} >
// 								concat(collective)
// 						</Link>
// 					</Typography>
// <AddResourceModal />
// <Button className={classes.button} component={Link} to='/profile'>
// 	profile
// </Button>
// <Button className={classes.button} component={Link} to='/home'>
// 	Home
// </Button>
// {/* maybe we can put an icon here  */}
// {isAuthenticated ? <LogoutButton /> : <LoginButton />}
// 				</Toolbar>
// 			</AppBar>
// 	);
// }

// export default Nav;


import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddResourceModal from './AddResourceModal';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import Icon from '@material-ui/core/Icon';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles({
	link: {
		color: "white",
		padding: "0px 15px 0px 15px",
	},
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
	Logo:{
		color: 'white',
		fontSize: '20px'
	}
});

function Nav() {
	const classes = useStyles();
	const { isAuthenticated } = useAuth0();

	return (
		<AppBar position="static">
			<Toolbar className={classes.blue}>
				{/* <Typography variant="h6" className={classes.title}>
					concat
				</Typography> */}
				<Button className={classes.Logo} component={Link} to='/'>
					concat
				</Button>
				{/* <Link href="/" className={classes.link}>
					Search
				</Link>
				<Link href="/saved" className={classes.link}>
					Saved
				</Link> */}
				<AddResourceModal />
				<Button className={classes.button} component={Link} to='/profile'>
					<PersonIcon fontSize='large' />
				</Button>
				<Button className={classes.button} component={Link} to='/home'>
					<HomeIcon fontSize='large' />
				</Button>
				{/* maybe we can put an icon here  */}
				{isAuthenticated ? <LogoutButton /> : <LoginButton />}
			</Toolbar>
		</AppBar>
	);
}

export default Nav;