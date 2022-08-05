import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import * as actions from "../../reduxStore/actions/index";
import { connect } from "react-redux";
import swal from "sweetalert";
import ReactTable from "react-table";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
// import { DateRangePicker } from "react-date-range";
import moment from "moment";
import DatePicker from "react-datepicker";
import {
  Row,
  Col,
  Card,
  Table,
  Label,
  Button,
  CardBody,
  FormGroup,
  CardHeader,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Modal,
  Input,
  ModalHeader,
  ModalBody,
  Container,
  PaginationLink,
  Pagination,
  PaginationItem,
} from "reactstrap";
import Loader from "../Loader";
import CustomInput from "../../views/CustomeInput";
import { date } from "yup";

function TTP(props) {
  //token
  const token = props.login?.login[0]?.token?.token;

  useEffect(() => {
    props.ttpGetData(token);
  }, []);

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  // search yaha se shuru ho raha
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //!filter code
  const [filter, setFilter] = React.useState("");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  //!date state
  const [state, setState] = useState({
    start_date: null,
    end_date: null,
  });

  const handleChangeDate = (event) => {
    console.log("))(((", event.target.value);

    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  console.log("*** start date", state.start_date);
  console.log("*** end date", state.end_date);

  if (props.login?.login?.length === 0) {
    return <Redirect to={"/login"} />;
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <Card>
          <CardHeader className="bg-info text-white">
            <Row>
              <Col>
                <strong>TTP Champs</strong>
              </Col>
              <Col md={5}></Col>
              <Col md={2}>
                <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  className="download-table-sm-button"
                  table="table-to-xls"
                  filename="ttpchamps"
                  sheet="tablecsv"
                  buttonText="Download"
                />
              </Col>

              <Col md={4}>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="search by name, email, emp ID"
                    size="sm"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>

            <Row></Row>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={4}>
                <Label>Start Date</Label>
                <InputGroup size="sm">
                  <Input
                    component={CustomInput}
                    type="date"
                    name="start_date"
                    id="start_date"
                    onChange={(event) => handleChangeDate(event)}
                  />
                </InputGroup>
              </Col>
              <Col md={4}>
                <Label>End Date</Label>
                <InputGroup size="sm">
                  <Input
                    component={CustomInput}
                    type="date"
                    name="end_date"
                    id="end_date"
                    onChange={(event) => handleChangeDate(event)}
                  />
                </InputGroup>
              </Col>

              <Col md={4}>
                <Label>Verified Filter</Label>
                <InputGroup>
                  <Input
                    type="select"
                    size="sm"
                    value={filter}
                    onChange={handleFilterChange}
                  >
                    <option value="">Select Filter</option>
                    <option value={"Active"}>Verified</option>
                    <option value={"Inactive"}>Not Verified</option>
                  </Input>
                </InputGroup>
              </Col>
            </Row>
            <Table
              className="table table-sm"
              style={{ fontSize: "12px" }}
              id="table-to-xls"
            >
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">EMP ID</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  {/* <th scope="col">Role</th> */}
                  <th scope="col">Date</th>
                  <th scope="col">Verified</th>
                  {/* <th scope="col">Event Name</th> */}
                </tr>
              </thead>
              <tbody>
                {props?.ttp?.isLoading ? (
                  <tr>
                    <td colSpan={12}>
                      <Loader color={"primary"} />
                    </td>
                  </tr>
                ) : props?.ttp?.ttp?.length > 0 ? (
                  props?.ttp?.ttp
                    ?.filter(
                      (employee) =>
                        employee?.name
                          ?.toLowerCase()
                          .includes(searchTerm.trim().toLowerCase()) ||
                        employee?.email
                          ?.toLowerCase()
                          .includes(searchTerm.trim().toLowerCase()) ||
                        employee?.emp_id
                          ?.toString()
                          ?.toLowerCase()
                          .includes(searchTerm.trim().toLowerCase())
                    )
                    ?.sort((a, b) => {
                      let dateA = new Date(a.date),
                        dateB = new Date(b.date);
                      return dateA - dateB;
                    })
                    .filter((employee) => {
                      if (filter == "Active") return employee?.isVerified == 1;
                      else if (filter == "Inactive")
                        return employee?.isVerified == 0;
                      else {
                        return employee;
                      }
                    })
                    .filter((employee) => {
                      if (
                        state.start_date === null &&
                        state.end_date === null
                      ) {
                        return employee;
                      } else if (
                        employee.date >= state.start_date &&
                        employee.date <= state.end_date
                      ) {
                        return employee;
                      }
                    })
                    ?.map((employee) => {
                      return (
                        <tr key={employee?.id}>
                          <td>{employee?.name}</td>
                          <td>{employee?.emp_id?.toString()}</td>
                          <td>{employee?.email}</td>
                          <td>{employee?.phone_number}</td>
                          {/* <td>{employee?.role}</td> */}
                          <td>{employee?.date}</td>

                          <td>
                            {employee?.isVerified == 1
                              ? "Verified"
                              : "Not Verified"}
                          </td>

                          {/* <td>{employee?.event_name}</td> */}
                        </tr>
                      );
                    })
                ) : (
                  <tr>
                    <td colSpan={3}>No Employees</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    ttp: state.ttp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ttpGetData: (token) => dispatch(actions.ttpGetData(token)),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TTP));
