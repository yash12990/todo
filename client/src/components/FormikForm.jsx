import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function FormikForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:5010/users/create-user",
        values
      );
      if (response.status === 200) {
        alert("User added successfully!");
        resetForm();
      }
    } catch (error) {
      console.error("There was an error adding the user!", error);
    }
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="mt-2 flex flex-col gap-y-4 text-center">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              className="border-[0.5px] border-black p-2 rounded-lg text-center"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="border-[0.5px] border-black p-2 rounded-lg text-center"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="border-[0.5px] border-black p-2 rounded-lg text-center"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="p-2 w-20 bg-slate-400 rounded-xl text-white"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Adding..." : "Add User"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
