import React from "react";
import { Formik } from "formik";
import { v4 } from "uuid";
import { useAddPostMutation } from "../api/apiSlice";

const AddForm = () => {
  const [addPost] = useAddPostMutation();
  return (
    <div>
      <h1>Add Post!</h1>
      <Formik
        initialValues={{ id: v4(), title: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values);
            addPost(values);
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddForm;
