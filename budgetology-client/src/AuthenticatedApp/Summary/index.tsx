import { Box, Container, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import { Budget } from "AuthenticatedApp/Summary/Budget";
import { CircleDial } from "AuthenticatedApp/common/CircleDial";
import { NavigationList } from "AuthenticatedApp/common/NavigationList";
import { RouteComponentProps } from "@reach/router";
import image from "AuthenticatedApp/Summary/graph_image.svg";
import { useAuth } from "common/AuthContent";
import { useMeQuery } from "generated/apolloComponents";

const useStyles = makeStyles(theme => ({
  outerWrap: {
    display: "flex",
    height: "100vh"
  },
  container: {
    paddingTop: "30px",
    display: "flex",
    alignContent: "center",
    flexDirection: "column"
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  overview: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    height: "50vh",
    width: "50vh"
  }
}));

export const Summary: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.outerWrap}>
      <NavigationList />
      <Container className={classes.container}>
        <Box className={classes.overview}>
          <img src={image} className={classes.image} alt="Man with graph" />
          <Budget />
        </Box>
      </Container>
      <CircleDial />
    </div>
  );
};
