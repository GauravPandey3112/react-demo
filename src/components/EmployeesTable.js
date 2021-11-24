import { Container, createTheme, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
import { employees_data } from '../config/employees_data';
import ReactHtmlParser from "react-html-parser";


export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const employees = employees_data
const EmployeesTable = () => {
    const [search, setSearch] = useState("");
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
    const history = useHistory();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type: 'dark',
        },
    })

    const handleSearch = () => {
        return employees.filter(
            (employee) =>
                employee[2].toLowerCase().includes(search)
        );
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Container style={{ textAlign: "center" }}>
                <Typography
                    variant="h4"
                    style={{ margin: 18, fontFamily: "Montserrat" }}
                >
                    Employee List
                </Typography>
                <TextField
                    label="Search Employee..."
                    variant="outlined"
                    style={{ marginBottom: 20, width: "100%" }}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <TableContainer component={Paper}>

                    <Table aria-label="simple table">
                        <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                            <TableRow>
                                {["Timestamp", "Employee", "Computer", "Policy", "Rule", "Action", "Description"].map((head) => (
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
                                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                                .map((row) => {
                                    return (
                                        <TableRow
                                            onClick={() => history.push(`/employee/${row[0]}`)}
                                            className={classes.row}
                                            key={row[0]}
                                        >
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
                                            <TableCell align="right">
                                                {row[5]}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row[6]}
                                            </TableCell>
                                            <TableCell align="right">
                                                {ReactHtmlParser(row[7])}
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>

                </TableContainer>

                <Pagination
                    count={(handleSearch()?.length / 10).toFixed(0)}
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

export default EmployeesTable
