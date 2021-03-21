import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Register.css";
const Register = () => {
  const history = useHistory();
  const emailRegExp = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/;
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <>
      <div className="reg-main">
        <h2 className="form-heading">Registration</h2>
        <div className="form-wrapper">
          <Formik
            initialValues={{ name: "", email: "", phone: "" }}
            validationSchema={yup.object({
              name: yup.string().required("Please enter name.."),
              email: yup
                .string()
                .matches(emailRegExp, "Email  is not valid.")
                .required("Please enter email.."),
              phone: yup
                .string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("please enter phone no.."),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const payload = {
                name: values.name,
                email: values.email,
                phone: values.phone,
              };
              // console.log(JSON.stringify(payload, null, 2));
              axios
                .post(
                  `https://stu-management-system.herokuapp.com/user/register`,
                  payload
                )
                .then(() => history.push("/user"))
                .catch((err) => console.log(err));
              resetForm();
              setSubmitting(false);
            }}
            enableReinitialize
          >
            {(props) => (
              <Form className="form">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <Field
                  className="field"
                  type="text"
                  name="name"
                  placeholder="Enter name.."
                />
                <span className="err">
                  <ErrorMessage name="name" />
                </span>
                <label className="label" htmlFor="email">
                  Email
                </label>
                <Field
                  className="field"
                  type="email"
                  name="email"
                  placeholder="Enter email.."
                />
                <span className="err">
                  <ErrorMessage name="email" />
                </span>

                <label className="label" htmlFor="phone">
                  Phone
                </label>
                <Field
                  className="field"
                  type="text"
                  name="phone"
                  placeholder="Enter phone no.."
                />
                <span className="err">
                  <ErrorMessage name="phone" />
                </span>

                <div className="btn-wrapper">
                  <button className="btn" type="submit">
                    <span>{props.isSubmitting ? "loading" : "Submit"}</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
