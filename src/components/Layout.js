import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { format } from 'date-fns';
import { Avatar } from '@material-ui/core';


const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        title: {
            padding: theme.spacing(2)
        },
        page: {
            background: '#f9f9f9',
            width: '100%',

        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'employee list',
            icon: <ListIcon color="secondary" />,
            path: '/'
        },
        {
            text: 'employee',
            icon: <AccountCircleIcon color="secondary" />,
            path: '/user'
        }
    ]

    return (
        <div className={classes.root}>
            {/* app bar*/}
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        tejas
                    </Typography>
                    <Avatar src="/img/dummy.png" className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            {/* side bar*/}

            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography className={classes.title}>
                        user dashboard
                    </Typography>
                </div>

                {/*list/ links */}
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
