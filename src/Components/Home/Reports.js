import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import * as actions from "../../reduxStore/actions/index";
import { connect } from "react-redux";
import { CSVLink } from "react-csv";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { ExcelFile, ExcelSheet } from "react-data-export";
import ExportCSV from "./Dashboard/ExportCSV";
import {
  Row,
  Col,
  Card,
  Table,
  CardBody,
  CardHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from "reactstrap";
import Scale from "../Scale";
import Loader from "../Loader";
import { Filter } from "@material-ui/icons";

const mapStateToProps = (state) => {
  return {
    invoiceGroup: state.invoiceGroup,
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInvoiceGroupGetData: (token) =>
      dispatch(actions.invoiceGroupGetData(token)),
  };
};

function Reports(props) {
  const token = props.login?.login[0]?.success?.token;
  useEffect(() => {
    props.onInvoiceGroupGetData(token);
  }, []);

  //!pagination
  const [state, setState] = useState({
    pageSize: 10, // <- 2 items will be shown on single page
    pageIndex: 0, // 0 is a default page to show
    items: props.invoiceGroup.isLoading
      ? []
      : props.invoiceGroup.invoiceGroup.filter(
          (invoice) =>
            invoice.final_status === "1" || invoice.final_status === "0"
        ),
  });

  const handlePrevPageClick = (event) => {
    setState((prevState) => ({
      ...state,
      pageIndex: prevState.pageIndex > 0 ? prevState.pageIndex - 1 : 0,
    }));
  };

  const handleNextPageClick = (event) => {
    console.log("++++", state.pageIndex);
    setState((prevState) => ({
      ...state,
      pageIndex:
        prevState.pageIndex <
        Math.ceil(prevState.items.length / prevState.pageSize)
          ? prevState.pageIndex + 1
          : prevState.pageIndex,
    }));
  };

  const finalInvoices = props.invoiceGroup.invoiceGroup.filter(
    (invoice) => invoice.final_status === "1" || invoice.final_status === "0"
  );

  const data = document.getElementById("data");
  console.log("***", data);

  return (
    <div>
      <div className="col-lg-12">
        <Card>
          <CardHeader className="bg-primary text-white">
            <strong>Reports</strong>
          </CardHeader>
          <CardBody>
            <table
              className="table table-sm"
              style={{ fontSize: "12px" }}
              id="table-to-xls"
            >
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th scope="col">Sr No.</th>
                  <th scope="col">Invoice No.</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Vendor</th>
                  {/* <th scope="col">TOD</th> */}
                  <th scope="col">P/O Status</th>
                  <th scope="col">Loading Port</th>
                  <th scope="col">Destination Port</th>
                  <th scope="col">Freight</th>
                  <th scope="col">Vessel</th>
                  <th scope="col">Drawback</th>
                  {/* <th scope="col">BRC</th> */}
                </tr>
              </thead>
              <tbody>
                {" "}
                {props?.invoiceGroup?.isLoading ? (
                  <tr>
                    <td colSpan={20}>
                      <Loader color={"primary"} />
                    </td>
                    {/* <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td> */}
                    {/* <td scope="col">
                      <Scale />
                    </td> */}
                  </tr>
                ) : props.invoiceGroup?.invoiceGroup?.length > 0 ? (
                  props.invoiceGroup?.invoiceGroup
                    ?.filter(
                      (invoice) =>
                        invoice.final_status === "1" ||
                        invoice.final_status === "0"
                    )
                    ?.slice(
                      state.pageIndex * state.pageSize,
                      state.pageIndex * state.pageSize + state.pageSize
                    )
                    ?.map((invoice, index) => {
                      if (
                        invoice.final_status === "1" ||
                        invoice.final_status === "0"
                      ) {
                        return (
                          <tr key={invoice.id}>
                            <td scope="col">{index + 1}</td>
                            <td scope="col">{invoice.id}</td>
                            <td scope="col">{invoice?.customer?.name}</td>
                            <td scope="col">
                              {invoice?.consignment?.vendor?.name}
                            </td>
                            {/* <td scope="col">{invoice?.TOD}</td> */}
                            <td scope="col">
                              {invoice?.consignment?.po_status === "1"
                                ? "Completed"
                                : "OnGoing"}
                            </td>
                            <td scope="col">{invoice?.port_of_loading}</td>
                            <td scope="col">{invoice?.destination}</td>
                            <td scope="col">{invoice?.frieght}</td>
                            <td scope="col">
                              {invoice?.consignment?.vessel?.name}
                            </td>
                            <td scope="col">{invoice?.drawback_code}</td>
                            {/* <td scope="col">{invoice?.consignment?.BRC}</td> */}
                          </tr>
                        );
                      }
                    })
                ) : (
                  <tr>
                    <td colSpan={3}>No invoices</td>
                  </tr>
                )}
              </tbody>
              <nav>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink
                      previous
                      tag="button"
                      onClick={(event) => handlePrevPageClick(event)}
                    >
                      Back
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink
                      next
                      tag="button"
                      onClick={(event) => handleNextPageClick(event)}
                    >
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
              {/* <CSVLink
                data={data}
                filename={"my-file.csv"}
                className="btn btn-primary"
                target="_blank"
              >
                Download me
              </CSVLink> */}
            </table>

            {/* <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-sm-button"
              table="table-to-xls"
              filename="reports"
              sheet="tablecsv"
              buttonText="Download"
            /> */}
            {/* <ExcelFile>
              <ExcelSheet dataSet={finalInvoices} name="reports" />
            </ExcelFile> */}
            {/* <div className="col-md-4 center">
              <ExportCSV csvData={finalInvoices} fileName={"reports"} />
            </div> */}
            {/* <Button variant="warning">
              <CSVLink data={finalInvoices} filename={"reports.csv"}>
                Export
              </CSVLink>
            </Button> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
