import React, { Fragment, useState, useEffect } from "react";

import { Row, Col, Button } from "reactstrap";
import "../../assets/css/datatable.css";
import Top from "./starter/Top";
import Reports from "../Reports";
import ConsignmentSummary from "./consignment-summary/consignment-summary";
import EnquriesSummary from "./enquries-summary/enquries-summary";
import InvoiceSummary from "./invoice-summary/invoice-summary";
import PurchaseOrderSummary from "./purchaseOrder-summary/purchaseOrder-summary";

function Dashboard(props) {
  return (
    <Fragment>
      <div className="container-fluid">
        <Row>
          <Col className="mt-4">
            <Top {...props} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ConsignmentSummary />
          </Col>
          <Col md={6}>
            <EnquriesSummary />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <InvoiceSummary />
          </Col>
          <Col md={6}>
            <PurchaseOrderSummary />
          </Col>
        </Row>
        <Row>
          <Col sm={12}></Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Dashboard;
