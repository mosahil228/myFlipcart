import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from "@material-ui/icons/Person";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AppsIcon from "@material-ui/icons/Apps";
import TranslateIcon from '@material-ui/icons/Translate';
import ChatIcon from '@material-ui/icons/Chat';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationsIcon from '@material-ui/icons/Notifications';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
    
        <Toolbar className="IT">
          <IconButton 
          id="Ite"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon className="mIcon"/>
          </IconButton>
        
        </Toolbar>
     
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className="ulList">
         <section className= "     respNav ">
          <div className="  respNav  ">
            <div className="loginWrap">
              <NavLink className="personIcon " to="/">
                <PersonIcon className="pIcon" />
                <span>Login & Signup</span>
              </NavLink>
              {/* <img src={fLogo2} alt="sahil" /> */}
            </div>
            <div className={classes.drawerHeader}>
          <IconButton className="IB"
           onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon className="iButton" /> : <ChevronRightIcon className="iButton"  />}
          </IconButton>
        </div>
          </div>
          <div className= "wrapItems d-none  ">
            <NavLink className="wrapSpan " to="/">
              <OfflineBoltIcon className="wrapIcons" />
              <span>SuperCoin Zone</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <DonutSmallIcon className="wrapIcons" />
              <span>FlipKart Plus Zone</span>
            </NavLink>
            <hr></hr>
            <NavLink className="wrapSpan " to="/">
              <DashboardIcon className="wrapIcons" />
              <span>All Categories</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <AppsIcon className="wrapIcons" />
              <span>More On Flipkart</span>
            </NavLink>
            <hr></hr>
            <NavLink className="wrapSpan " to="/">
              <TranslateIcon className="wrapIcons" />
              <span>Choose Lnaguage</span>
            </NavLink>
            <hr></hr>
            <NavLink className="wrapSpan " to="/">
              <MonetizationOnIcon className="wrapIcons" />
              <span>Offer Zone</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <LocalMallIcon className="wrapIcons" />
              <span>Sell On Flipkart</span>
            </NavLink>
            <hr></hr>
            <NavLink className="wrapSpan " to="/">
              <ShoppingBasketIcon className="wrapIcons" />
              <span>My Orders</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <LocalActivityIcon className="wrapIcons" />
              <span>My Rewards</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              {/* <ShoppingCartIcon className="wrapIcons" /> */}
              <span>My Cart</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <FavoriteIcon className="wrapIcons" />
              <span>My Wishlist</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <PersonIcon className="wrapIcons" />
              <span>My Accounts</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <NotificationsIcon className="wrapIcons" />
              <span>My Notifications</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <ChatIcon className="wrapIcons" />
              <span>My Chats</span>
            </NavLink>
            <hr></hr>
            <NavLink className="wrapSpan " to="/">
              <span>Notifications Preferences</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <span>Help Centre</span>
            </NavLink>
            <NavLink className="wrapSpan " to="/">
              <span>Legal</span>
            </NavLink>
          </div>
        </section>
        </List>
      </Drawer>
      
    </div>
  );
}
