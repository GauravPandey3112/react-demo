import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

        datasets: [
            {
                data: [30, 50, 80, 60, 40, 95, 30],
                label: "Monthly Data",
                borderColor: "#EEBC1D",
                backgroundColor: '#fff'
            },
        ],
    }
    const options = {
        elements: {
            point: {
                radius: 1,
            },
        },
    }

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
            <Line options={options} data={data} />
        </ThemeProvider>

    )
}

export default LineChart
