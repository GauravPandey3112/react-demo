import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router'
import EmployeeInfo from '../components/EmployeeInfo';
import { employee_data } from '../config/employee_data';
import { employees_data } from '../config/employees_data';
import EmployeeTable from '../components/EmployeeTable';
import Header from '../components/Header';
import SelectButton from '../components/SelectButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Employee = () => {


    const { id } = useParams();
    const employee = employee_data
    const employeeInfo = employees_data[id]

    const useStyles = makeStyles((theme) => ({
        container: {
            display: "flex",
            [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItems: "center",
            },
            paddingLeft: 30
        },
        sidebar: {
            width: "30%",
            [theme.breakpoints.down("md")]: {
                width: "100%",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 25,
            borderRight: "2px solid grey",
        },
        body: {
            width: "70%",
            [theme.breakpoints.down("md")]: {
                width: "100%",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 25,

        },
        heading: {
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
        },
        description: {
            width: "100%",
            fontFamily: "Montserrat",
            padding: 25,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: "justify",
        },
        personData: {
            alignSelf: "start",
            padding: 25,
            paddingTop: 10,
            width: "100%",
            [theme.breakpoints.down("md")]: {
                display: "flex",
                justifyContent: "space-around",
            },
            [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                alignItems: "center",
            },
            [theme.breakpoints.down("xs")]: {
                alignItems: "start",
            },
        },
    }));

    const classes = useStyles();
    const editButton = <span style={{ display: "flex", alignItems: "center" }}>
        <EditIcon /> Edit
    </span>
    const deleteButton = <span style={{ display: "flex", alignItems: "center", color: "red" }}>
        <DeleteIcon /> Delete
    </span>

    return (
        <>
            <Header employee_name={employeeInfo[2].substring(employeeInfo[2].indexOf(',') + 1)} />
            <div className={classes.container}>
                <div className={classes.sidebar}>
                    <img
                        src="/user-2.png"
                        alt={employeeInfo[2]}
                        height="200"
                        style={{ marginBottom: 20 }}
                    />
                    <Typography variant="h3" className={classes.heading}>
                        {employeeInfo[2].substring(employeeInfo[2].indexOf(',') + 1)}
                    </Typography>

                    <div className={classes.personData}>


                        <span style={{ display: "flex" }}>
                            <Typography variant="h5" className={classes.heading}>
                                Position:
                            </Typography>
                            &nbsp; &nbsp;
                            <Typography
                                variant="h5"
                                style={{
                                    fontFamily: "Montserrat",
                                }}
                            >
                                Software Engineer
                            </Typography>
                        </span>
                        <span style={{ display: "flex" }}>
                            <Typography variant="h5" className={classes.heading}>
                                Email:
                            </Typography>
                            &nbsp; &nbsp;
                            <Typography
                                variant="h5"
                                style={{
                                    fontFamily: "Montserrat",
                                }}
                            >
                                abc@kretadx.com
                            </Typography>
                        </span>

                        <span style={{ display: "flex" }}>
                            <Typography variant="h5" className={classes.heading}>
                                Phone:
                            </Typography>
                            &nbsp; &nbsp;
                            <Typography
                                variant="h5"
                                style={{
                                    fontFamily: "Montserrat",
                                }}
                            >
                                +91 123456789
                            </Typography>
                        </span>
                        <br />
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                            <SelectButton children={editButton} />
                            <SelectButton children={deleteButton} />
                        </span>

                    </div>
                </div>
                {/* {chart} */}
                <div className={classes.body}>
                    <EmployeeInfo employee={employee} />
                    <EmployeeTable employee={employee} />
                </div>

            </div>
        </>
    )




}

export default Employee
