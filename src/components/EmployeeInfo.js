import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import LineChart from './LineChart';

const EmployeeInfo = ({ employee }) => {

    const useStyles = makeStyles((theme) => ({
        container: {
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
            padding: 40,
            [theme.breakpoints.down("md")]: {
                width: "100%",
                marginTop: 0,
                padding: 20,
                paddingTop: 0,
            },
        },
    }));

    const classes = useStyles();




    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <div className={classes.container}>
                <LineChart />
            </div>
        </ThemeProvider>
    )
}

export default EmployeeInfo
