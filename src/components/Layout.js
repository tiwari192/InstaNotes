import { Drawer,List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const drawerWidth = 240
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const d = new Date()

const useStyles = makeStyles((theme) => {

    return{

        root:{
            display: 'flex'
        },
        page: {
            background: '#f9f9f9',
            width: '100%'
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px )`
        },
        toolbar: theme.mixins.toolbar,
        expand: {
            flexGrow: 1
        }

    }
})

function Layout({children}) {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [

        {
            text: 'My Notes',
            icon: <SubjectOutlined color="primary" />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined color="primary" />,
            path: '/create'
        }

    ]

    return (

        <div className={classes.root}>

            {/* appbar */}
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography className={classes.expand}>Today is {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}</Typography>
                    <AccountCircleIcon fontSize="large"/>
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer 
                className={classes.drawer} 
                variant="permanent" 
                anchor="left" 
                classes={{ paper: classes.drawerPaper}}
            >
            
                <div>
                    <Typography variant="h5" className={classes.title}>
                        My Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item => (
                        <ListItem 
                            key = {item.text}
                            button
                            onClick = {() => history.push(item.path)}
                            className = { location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary = {item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* notes */}
            <div className={classes.page}>
                <div  className={classes.toolbar}></div>
                {children}
            </div>
            
        </div>
    )
}

export default Layout
