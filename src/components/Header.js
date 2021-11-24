import {
    AppBar,
    Container,
    createTheme, makeStyles, Toolbar, Typography, ThemeProvider
    , IconButton, SwipeableDrawer, Box, Divider, List, ListItem, ListItemText
} from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import MenuIcons from '@material-ui/icons/Menu'
import { useState } from 'react';

const drawerWidth = 200;

const Header = ({ employee_name }) => {
    const useStyles = makeStyles(() => ({
        title: {
            color: "gold",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            cursor: "pointer"
        },
        name: {
            color: "#fff",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            padding: 20
        },
        sub: {
            marginLeft: "auto",
            color: "#fff",
            fontFamily: "Montserrat",
            padding: 20
        },
        drawer: {
            width: drawerWidth,
            textAlign: "center",
            color: "gold",
            background: "#14161a",
            height: "100vh"
        },
        list: {
            padding: 20
        },
        box: {
            padding: 20,
            fontFamily: "Montserrat",
            fontWeight: "bold"
        },
        item: {
            marginTop: 20,
            padding: 10,
        }

    }))
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const history = useHistory();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type: 'dark',
        },
    })
    return (
        <ThemeProvider theme={darkTheme}>

            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcons></MenuIcons>
                        </IconButton>
                        <Typography variant='h5' onClick={() => history.push("/")} className={classes.title}>Behavior Alerts</Typography>
                        {employee_name &&
                            <>
                                <Typography variant='h6' className={classes.name}>{employee_name}</Typography>
                                <Typography variant='subtitle1' className={classes.sub}>Employee's Page</Typography>
                            </>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => { }}
            >
                <div className={classes.drawer}>
                    <Box className={classes.box}>
                        Kretadx
                    </Box>
                    <Divider />
                    <List className={classes.list}>
                        <ListItem button className={classes.item}>
                            <ListItemText primary={"Time tracking"} />
                        </ListItem>
                        <Divider />
                        <ListItem button className={classes.item}>
                            <ListItemText primary={"Reports"} />
                        </ListItem>
                        <Divider />
                        <ListItem button className={classes.item}>
                            <ListItemText primary={"Risk"} />
                        </ListItem>
                        <Divider />
                        <ListItem button className={classes.item}>
                            <ListItemText primary={"Productivity"} />
                        </ListItem>
                        <Divider />
                        <ListItem button className={classes.item}>
                            <ListItemText primary={"Behavior"} />
                        </ListItem>
                        <Divider />
                    </List>
                </div>
            </SwipeableDrawer>

        </ThemeProvider>
    )
}




export default Header
