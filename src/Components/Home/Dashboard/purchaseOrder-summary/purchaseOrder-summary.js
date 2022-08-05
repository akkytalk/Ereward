import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "../../../../axios";
import * as actions from "../../../../reduxStore/actions/index";
import { Card, CardBody, CardTitle, CardSubtitle, Col, Row } from "reactstrap";
import moment from "moment";
import { Line } from "react-chartjs-2";
import Scale from "../../../Scale";

const mapPropsToDispatch = (dispatch) => {
  return {
    allStatsGetData: (token) => dispatch(actions.allStatsGetData(token)),
  };
};

const mapStateToProps = (state) => {
  return {
    allStats: state.allStats,
    login: state.login,
  };
};

function PurchaseOrderSummary(props) {
  //token
  const token = props.login?.login[0]?.success?.token;

  useEffect(() => {
    // consignmentStats(setStats, token);
    props.allStatsGetData(token);
  }, []);

  var startDate = moment().subtract(1, "months").format("YYYY-MM-DD");
  var endDate = moment().add(1, "day").format("YYYY-MM-DD");

  // var startDate = moment("2021-04-23").format("YYYY-MM-DD");
  // console.log("+-=-=", startDate);
  // var endDate = moment("2021-05-03").format("YYYY-MM-DD");

  var enumerateDaysBetweenDates = function (startDate, endDate) {
    var dates = [];

    var currDate = moment(startDate).startOf("day");
    var lastDate = moment(endDate).startOf("day");

    while (currDate.add(1, "days").diff(lastDate) < 0) {
      console.log(currDate.format("YYYY-MM-DD"));
      dates.push(currDate.clone().format("YYYY-MM-DD"));
    }

    return dates;
  };

  const dates = enumerateDaysBetweenDates(startDate, endDate);
  console.log("++++", dates.length);

  //Line chart
  let lineData = {
    labels: dates.map((date) => date),
    // labels: props?.allStats?.allStats?.invoice?.map((o) => o.Created_Day),
    // labels: [10, 20, 30, 40, 50],
    datasets: [
      {
        label: "Orders",
        borderWidth: 1,
        backgroundColor: "rgba(50,205,50,.1)",
        borderColor: "rgb(50,205,50)",
        pointBorderColor: "rgb(50,205,50)",
        pointBackgroundColor: "rgb(50,205,50)",
        data: props?.allStats?.allStats?.po?.map((o) => ({
          y: o.count,
          x: o.Created_Day,
        })),
        // data: [1, 2, 5, 7, 8, 10],
      },
    ],
  };
  return (
    <Card>
      <CardBody>
        {props?.allStats?.isLoading ? (
          // <div>Loading..</div>
          <div
            className="chart-wrapper"
            style={{
              width: "100%",
              margin: "0 auto",
              height: 250,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Scale />
          </div>
        ) : (
          <>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <CardTitle>Purchase-Order Summary</CardTitle>
                <CardSubtitle>Summary of the month</CardSubtitle>
              </div>
              <div className="ml-auto d-flex align-items-center">
                <ul className="list-inline font-12 dl mr-3 mb-0">
                  <li className="border-0 p-0 text-success list-inline-item">
                    <i className="fa fa-circle"></i> Purchase-Order
                  </li>
                  {/* <li className="border-0 p-0 text-primary list-inline-item">
                    <i className="fa fa-circle"></i> Ipad
                  </li> */}
                </ul>
              </div>
            </div>
            <Row>
              <Col lg="12">
                <div className="campaign ct-charts">
                  <div
                    className="chart-wrapper"
                    style={{ width: "100%", margin: "0 auto", height: 250 }}
                  >
                    <Line
                      data={lineData}
                      options={{
                        tooltips: {
                          mode: "x-axis",
                        },
                        maintainAspectRatio: false,
                        legend: {
                          display: false,
                          labels: { fontFamily: "Nunito Sans" },
                        },
                        scales: {
                          yAxes: [
                            {
                              stacked: true,
                              gridLines: { display: false },
                              ticks: { fontFamily: "Nunito Sans" },
                            },
                          ],
                          xAxes: [
                            {
                              type: "time",
                              scaleLabel: {
                                display: true,
                                labelString: "Date",
                              },
                              gridLines: { display: false },
                              ticks: { fontFamily: "Nunito Sans" },
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )}
      </CardBody>
    </Card>
  );
}

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(PurchaseOrderSummary);
