import { Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import User from "./../axios/agent";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

const Account = () => {
  const navigate = useNavigate();

  let schema = yup.object().shape({
    password: yup.string().required("password is not valid!!!"),
    email: yup.string().email().required(),
  });

  return (
    <>
      <Header border={true} />
      <div className="account container">
        <div className="title">My Account</div>

        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={schema}
          onSubmit={async (values) => {
            if (!!values) {
              const { data } = await User.login({
                password: values.password,
                email: values.email,
                avatar: "",
              });
              if (data.success) {
                localStorage.setItem("token", data.token);
                navigate("/");
              }
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className="account__wrapper">
              <div className="account__wrapper__button-switch">
                <button className="account__wrapper__button-switch__sign active">
                  Sign in
                </button>

                <button className="account__wrapper__button-switch__register">
                  Register
                </button>
              </div>

              <div className="account__wrapper__input">
                <Field type="text" name="email" placeholder="Email" id="" />
                {errors.email && touched.email ? (
                  <div className="err-message">*{errors.email}</div>
                ) : null}
              </div>

              <div className="account__wrapper__input">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  id=""
                  // onFocus={() => {
                  // }}
                />
                {errors.password && touched.password ? (
                  <div className="err-message">*{errors.password}</div>
                ) : null}
              </div>

              <div className="account__wrapper__accept">
                {/* <input type="checkbox" name="" id="accept" /> */}
                <label htmlFor="accept">Remember me</label>
              </div>

              <div className="account__wrapper__submit">
                <button
                // onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                //   formik.handleSubmit(e)
                // }
                >
                  Sign in
                </button>
              </div>

              <Link to="forgot-password" className="account__wrapper__note">
                <p>Have you forgotten your password?</p>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default Account;
