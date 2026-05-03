import * as yup from "yup"

export const contactSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().trim()
    .matches(/^(?:\+63|0)?9\d{9}$/, "Phone number is invalid")
    .required("Phone number is required"),
  message: yup.string().trim()
    .min(100, "Message must be at least 100 characters")
    .required("Message is required"),
  consent: yup.boolean().oneOf([true], "You must accept the terms")
})