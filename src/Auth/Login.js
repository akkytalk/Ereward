import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import authbg from "../Components/assets/krtex_background.jpg";

import {
  FormGroup,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardBody,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FA from "react-fontawesome";
import CustomInput from "../views/CustomeInput";
import * as Yup from "yup";

import * as actions from "../reduxStore/actions/index";
import { Redirect, withRouter } from "react-router-dom";

const MyInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => <Input {...field} {...props} />;

function Login(props) {
  const handleSubmit = (values, { setSubmitting }) => {
    let data = {
      email: values.email,
      password: values.password,
    };
    setSubmitting(true);
    props.postLogin(setSubmitting, data);
    return;
  };

  if (props.login?.login?.length !== 0) {
    return <Redirect to={"/"} />;
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        // backgroundImage: `url(${authbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="auth-wrapper align-items-center">
        <div className="container" style={{ paddingTop: 35 }}>
          <div className="no-gutters justify-content-center row">
            <div className="bg-white col-md-6 col-lg-4">
              <div className="p-4">
                <h3 className="font-medium mb-3">Sign In</h3>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={handleSubmit}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().required("Enter Your Email"),
                    password: Yup.string().required("Enter Your Password"),
                  })}
                >
                  {(formProps) => (
                    <Form className="mt-3">
                      <label htmlFor="email" className="font-medium">
                        Email
                      </label>
                      <div className="mb-2 input-group input-group-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <FA name="user-circle" />
                          </span>
                        </div>
                        <Field
                          component={CustomInput}
                          type="text"
                          name="email"
                          id="email"
                          className={
                            "form-control" +
                            (formProps.errors.email && formProps.touched.email
                              ? " is-invalid"
                              : "")
                          }
                          placeholder="yourname@company.com"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <label htmlFor="email" className="mt-3 font-medium">
                        Password
                      </label>
                      <div className="mb-2 input-group input-group-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <FA name={"unlock-alt"} />
                          </span>
                        </div>
                        <Field
                          component={CustomInput}
                          type="password"
                          name="password"
                          id="password"
                          className={
                            "form-control" +
                            (formProps.errors.password &&
                            formProps.touched.password
                              ? " is-invalid"
                              : "")
                          }
                          placeholder="* * * * * *"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="mt-3 mb-3 row">
                        <div className="col-12">
                          <Button
                            type="submit"
                            disabled={formProps.isSubmitting}
                            color="primary"
                            size="lg"
                            block
                          >
                            Log In
                          </Button>

                          <span className="text-danger pt-3 text-center">
                            {props.login?.errMess
                              ? props.login?.errMess?.message ===
                                "Request failed with status code 401"
                                ? "Wrong Login credentials"
                                : props.login?.errMess?.message
                              : null}
                          </span>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <Fragment>
  //     <div
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         backgroundImage: `url(${authbg})`,
  //         backgroundPosition: "center",
  //         backgroundSize: "cover",
  //         backgroundRepeat: "no-repeat",
  //       }}
  //     >
  //       <div
  //         className="col-xs-12 col-sm-12 col-md-5 col-lg-4"
  //         style={{
  //           position: "absolute",
  //           left: "50%",
  //           top: "50%",
  //           transform: "translate(-50%, -50%)",
  //         }}
  //       >
  //         <Card>
  //           <h3
  //             style={{ fontSize: "4em", textAlign: "center" }}
  //             className="p-2"
  //           >
  //             SignIn
  //           </h3>
  //           <Formik
  //             initialValues={{
  //               email: "",
  //               password: "",
  //             }}
  //             onSubmit={handleSubmit}
  //             validationSchema={Yup.object().shape({
  //               email: Yup.string().required("Enter Your Email"),
  //               password: Yup.string().required("Enter Your Password"),
  //             })}
  //           >
  //             {(formProps) => (
  //               <Form className="p-4">
  //                 <FormGroup>
  //                   <InputGroup size="lg">
  //                     <InputGroupAddon addonType="prepend">
  //                       <InputGroupText>
  //                         <FA name="user-circle" />
  //                       </InputGroupText>
  //                     </InputGroupAddon>
  //                     <Field
  //                       component={CustomeInput}
  //                       type="email"
  //                       name="email"
  //                       id="email"
  //                       placeholder="Enter Email"
  //                       className={
  //                         "form-control" +
  //                         (formProps.errors.email && formProps.touched.email
  //                           ? " is-invalid"
  //                           : "")
  //                       }
  //                     />
  //                     <ErrorMessage
  //                       name="email"
  //                       component="div"
  //                       className="invalid-feedback"
  //                     />
  //                   </InputGroup>
  //                 </FormGroup>
  //                 <FormGroup>
  //                   <InputGroup size="lg">
  //                     <InputGroupAddon addonType="prepend">
  //                       <InputGroupText>
  //                         <FA name={"unlock-alt"} />
  //                       </InputGroupText>
  //                     </InputGroupAddon>
  //                     <Field
  //                       component={CustomeInput}
  //                       type="password"
  //                       name="password"
  //                       id="password"
  //                       placeholder="Enter Password"
  //                       className={
  //                         "form-control" +
  //                         (formProps.errors.password &&
  //                         formProps.touched.password
  //                           ? " is-invalid"
  //                           : "")
  //                       }
  //                     />
  //                     <ErrorMessage
  //                       name="password"
  //                       component="div"
  //                       className="invalid-feedback"
  //                     />
  //                   </InputGroup>
  //                 </FormGroup>

  //                 <FormGroup>
  //                   <Button
  //                     color="primary"
  //                     type="submit"
  //                     disabled={formProps.isSubmitting}
  //                     size="lg"
  //                     block
  //                   >
  //                     Login
  //                   </Button>
  //                   <span className="text-danger pt-3 text-center">
  //                     {props.login?.errMess
  //                       ? props.login?.errMess?.message ===
  //                         "Error:401 Unauthorized"
  //                         ? "Wrong Login credentials"
  //                         : props.login?.errMess?.message
  //                       : null}
  //                   </span>
  //                 </FormGroup>
  //               </Form>
  //             )}
  //           </Formik>
  //         </Card>
  //       </div>
  //     </div>
  //   </Fragment>
  // );
}

const mapDispatchToProps = (dispatch) => ({
  postLogin: (setSubmitting, data) =>
    dispatch(actions.postLogin(setSubmitting, data)),
});

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
