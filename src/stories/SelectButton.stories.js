import SelectButton from "../components/SelectButton";

export default {
    title: "App/Button",
    component: SelectButton,
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Awesome Button'
        },
        selected: { control: 'boolean' }

    }
}

export const Button1 = () => <SelectButton children="Hello World" selected={true} />


