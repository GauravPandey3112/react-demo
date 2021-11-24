import React from 'react'
import Banner from '../components/Banner/Banner'
import EmployeesTable from '../components/EmployeesTable'
import Header from '../components/Header'

const Homepage = () => {
    return (
        <>
            <Header />
            <Banner />
            <EmployeesTable />
        </>
    )
}

export default Homepage
