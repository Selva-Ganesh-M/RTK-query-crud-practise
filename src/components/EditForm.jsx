import React from "react";
import { Formik } from "formik";
import { useGetSinglePostQuery, useUpdatePostMutation } from "../api/apiSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: post } = useGetSinglePostQuery(id);
  const [updatePost] = useUpdatePostMutation();

  //   PREPARE RENDER CONTENT
  let content;
  if (!post) {
    content = "loading";
  } else {
    console.log(post);
    content = (
      <div>
        <h1>Edit Post!</h1>
        <Formik
          initialValues={{ id: post.id, title: post.title }}
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
              updatePost(values);
              setSubmitting(false);
              resetForm();
              navigate("/");
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
  }
  return content;
};

export default EditForm;
