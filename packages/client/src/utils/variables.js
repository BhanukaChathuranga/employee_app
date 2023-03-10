import * as yup from "yup";

export const GENDER = {
    M: 'Male',
    F: 'Female'
}

// export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const phoneRegExp = /^[+][0-9]{11}$/;
export const stringRegExp = /^[a-zA-Z ]*$/;

export const empListUrl = "/employee/list";

export const schema = yup.object({
    first_name: yup.string().matches(stringRegExp,'Fist Name must be a charachter').trim().nonNullable().max(10, 'First Name must be at most 10 characters').min(6, 'First Name must be at least 6 characters').required(),
    last_name: yup.string().matches(stringRegExp,'Last Name must be a charachter').trim().nonNullable().max(10).min(6).required(),
    email: yup.string().email().required(),
    number: yup.string().min(10).max(13).matches(phoneRegExp, "phone number must be LK number"),
    gender: yup.string().required()
}).required();
