import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";


const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "contact",
    label: "Contact Number",
    id: "my-contact"
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10
  }
];

const initialFormValues = {
  fullName: "",
  email: "",
  contact: "",
  message: "",
  formSubmitted: false,
  success: false
};

export const ContactUs = () => {
 
  
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);
  
    const validate: any = (fieldValues = values) => {
      let err: any = { ...errors };
  
      if ("fullName" in fieldValues)
        err.fullName = fieldValues.fullName ? "" : "This field is required.";
  
      if ("email" in fieldValues) {
        err.email = fieldValues.email ? "" : "This field is required.";
      }
  
      if ("contact" in fieldValues) {
        err.contact = fieldValues.contact ? "" : "This field is required.";
      }
  
      if ("message" in fieldValues)
        err.message = fieldValues.message.length !== 0 ? "" : "This field is required.";
  
      setErrors({
        ...err
      });
    };
  
  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };


  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.contact &&
      fieldValues.message
    return isValid;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const isValid = formIsValid();
    setValues(initialFormValues)
      // ...initialFormValues,
      // formSubmitted: true,
      // success: true })
  };

  

  return (
    <div>
    <Typography variant="h6">Contact Us</Typography>
    <form onSubmit={handleFormSubmit} style={{alignItems: "center"}}>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <div style={{ marginBottom: 10, justifyContent: "space-between" }}>
          <TextField
            style = {{width: 500}}
            key={index}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            error={errors[inputFieldValue.name]}
            multiline={inputFieldValue.multiline ?? false}
            rows={inputFieldValue.rows ?? 1}
            {...(errors[inputFieldValue.name] && {
              error: true,
              helperText: errors[inputFieldValue.name]
            })}
          />
          <br />
          </div>
        );
      })}
      <Button
        variant="contained"
        type="submit"
        disabled={!formIsValid()}
      >
        Send Message
      </Button>
    </form>
    </div>
  );
}

export default ContactUs;