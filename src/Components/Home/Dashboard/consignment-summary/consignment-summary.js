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

function ConsignmentSummary(props) {
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
    // labels: props?.allStats?.allStats?.consignment?.map((o) => o.Created_Day),
    datasets: [
      // {
      //   label: "Income",
      //   borderWidth: 1,
      //   backgroundColor: "rgba(94,114,228,.1)",
      //   borderColor: "rgb(94,114,228)",
      //   pointBorderColor: "rgb(94,114,228)",
      //   pointBackgroundColor: "rgb(94,114,228)",
      //   data: [0, 15, 6, 11, 25, 9, 18, 24],
      // },
      {
        label: "Consignmnet",
        borderWidth: 1,
        backgroundColor: "rgba(79,195,247,.1)",
        borderColor: "rgb(79,195,247)",
        pointBorderColor: "rgb(79,195,247)",
        pointBackgroundColor: "rgb(79,195,247)",
        data: props?.allStats?.allStats?.consignment?.map((o) => ({
          y: o.count,
          x: o.Created_Day,
        })),
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
                <CardTitle>Consignment Summary</CardTitle>
                <CardSubtitle>Summary of the month</CardSubtitle>
              </div>
              <div className="ml-auto d-flex align-items-center">
                <ul className="list-inline font-12 dl mr-3 mb-0">
                  <li className="border-0 p-0 text-info list-inline-item">
                    <i className="fa fa-circle"></i> Consignment
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
                        responsive: true,
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
                              // stacked: true,
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

export default connect(mapStateToProps, mapPropsToDispatch)(ConsignmentSummary);
