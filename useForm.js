import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [form, setForm] = useState(initialState);

    const onInputChange = ({target})=>{
        const {name, value} = target;
        setForm({
            ... form,
            [name]: value
        });
    }

    const onResetForm = ()=>{
        setForm(initialState);
    }

    return {
        form,
        onInputChange,
        onResetForm
    }
}
