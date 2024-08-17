import { useState } from "react";

function useForm(initialValues, submitCallback){
    const[status, setStatus] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state, 
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        
        submitCallback(value);
    }
}