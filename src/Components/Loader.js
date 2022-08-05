// import React from "react";
// import { Card, CardBody } from "reactstrap";

// export default function Loader() {
//   return (
//     <div
//       className="col-xs-12 col-sm-12 col-md-5 col-lg-4"
//       style={{
//         position: "absolute",
//         left: "50%",
//         top: "50%",
//         transform: "translate(-50%, -50%)",
//       }}
//     >
//       <Card className="p-5">
//         <CardBody>
//           <div
//             className="spinner-grow text-success col-xs-12 col-sm-12 col-md-5 col-lg-4"
//             style={{
//               width: "3rem",
//               height: "3rem",
//               position: "absolute",
//               left: "50%",
//               top: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//             role="status"
//           >
//             <span className="sr-only">Loading...</span>
//           </div>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Loader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <LinearProgress /> */}
      <LinearProgress color={props?.color ? props?.color : "secondary"} />
    </div>
  );
}
