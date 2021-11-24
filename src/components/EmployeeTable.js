import { Container, createTheme, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react'
import { useState } from 'react';

const EmployeeTable = ({ employee }) => {
    const [page, setPage] = useState(1);
    const useStyles = makeStyles({
        row: {
            backgroundColor: "#16171a",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#131111",
            },
            fontFamily: "Montserrat",
        },
        pagination: {
            "& .MuiPaginationItem-root": {
                color: "gold",
            },
        },
    });
    const classes = useStyles();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type: 'dark',
        },
    })


    const handleSearch = () => {
        return employee
    };
    return (
        <ThemeProvider theme={darkTheme}>
            <Container style={{ textAlign: "center" }}>
                <Typography
                    variant="h4"
                    style={{ margin: 18, fontFamily: "Montserrat" }}
                >
                    Employee Data
                </Typography>


                <TableContainer component={Paper}>

                    <Table aria-label="simple table">
                        <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                            <TableRow>
                                {["Date/time", "Computer", "Process/URL", "Duration", "App/Webpage"].map((head) => (
                                    <TableCell
                                        style={{
                                            color: "black",
                                            fontWeight: "700",
                                            fontFamily: "Montserrat",
                                        }}
                                        key={head}
                                        align="right"
                                    >
                                        {head}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {handleSearch()
                                .slice((page - 1) * 5, (page - 1) * 5 + 5)
                                .map((row) => {
                                    return (
                                        <TableRow
                                            className={classes.row}
                                        >
                                            <TableCell align="right">
                                                {row[0]}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                            >{row[1]}

                                            </TableCell>
                                            <TableCell align="right">
                                                {row[2]}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row[3]}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row[4]}
                                            </TableCell>


                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>

                </TableContainer>

                <Pagination
                    count={(handleSearch()?.length / 5).toFixed(0)}
                    style={{
                        padding: 20,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                    classes={{ ul: classes.pagination }}
                    onChange={(_, value) => {
                        setPage(value);
                        window.scroll(0, 450);
                    }}
                />
            </Container>
        </ThemeProvider>
    )
}

export default EmployeeTable
