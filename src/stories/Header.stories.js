import React from "react";
import Header from "../components/Header";

export default {
    title: "App/Header",
    component: Header,
    argTypes: {
        employee_name: {
            control: { type: 'text' }
        }

    }
}

export const Employee = () => <Header />