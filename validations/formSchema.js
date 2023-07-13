import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup.string().required("Name field is required"),
    email: yup.string().email("Email is invalid").required("Email field is required"),
    phonenumber: yup.string().required("Phone number is reqired"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("password is required")
});