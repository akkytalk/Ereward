import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../reduxStore/actions/index";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import Scale from "../../../Scale";

function Top(props) {
  //token
  const token = props.login?.login[0]?.success?.token;
  useEffect(() => {
    props.countGroupGetData(token);
  }, []);

  // componentDidMount() {
  //   this.props.countGroupGetData();
  // }

  return (
    <div className="row">
      <div className="col-sm-12 col-md-3 col-lg-3">
        <Card outline color="success">
          <CardHeader className="bg-info text-white">
            <h6 className="mb-0">Enquiries</h6>
          </CardHeader>
          <CardBody>
            {props?.count.isLoading ? (
              <div>
                <Scale />
              </div>
            ) : (
              <h2 className="mb-0">{props?.count?.countGroup?.enquiries}</h2>
            )}
          </CardBody>
          <CardFooter>
            <h6>Total</h6>
          </CardFooter>
        </Card>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3">
        <Card>
          <CardHeader className="bg-success text-white">
            <h6 className="mb-0">Number of Consignment</h6>
          </CardHeader>
          <CardBody>
            {props?.count.isLoading ? (
              <div>
                <Scale />
              </div>
            ) : (
              <h2 className="mb-0">{props?.count?.countGroup?.consignment}</h2>
            )}
          </CardBody>
          <CardFooter>
            <h6>Completed</h6>
          </CardFooter>
        </Card>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3">
        <Card>
          <CardHeader className="bg-danger text-white">
            <h6 className="mb-0">Number of Purchase Order</h6>
          </CardHeader>
          <CardBody>
            {props?.count.isLoading ? (
              <div>
                <Scale />
              </div>
            ) : (
              <h2 className="mb-0">{props?.count?.countGroup?.po}</h2>
            )}
          </CardBody>
          <CardFooter>
            <h6>Pending</h6>
          </CardFooter>
        </Card>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3">
        <Card>
          <CardHeader className="bg-danger text-white">
            <h6 className="mb-0">Invoice</h6>
          </CardHeader>
          <CardBody>
            {props?.count.isLoading ? (
              <div>
                <Scale />
              </div>
            ) : (
              <h2 className="mb-0">{props?.count?.countGroup?.invoice}</h2>
            )}
          </CardBody>
          <CardFooter>
            <h6>Pending</h6>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

const mapPropsToDispatch = (dispatch) => {
  return {
    countGroupGetData: (token) => dispatch(actions.countGroupGetData(token)),
  };
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    login: state.login,
  };
};

export default connect(mapStateToProps, mapPropsToDispatch)(Top);
