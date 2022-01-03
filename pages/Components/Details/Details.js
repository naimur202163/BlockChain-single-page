import { Grid } from "@mui/material";
import React from "react";

const Details = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid lg={8} md={8}>
          <h3>THis is fior</h3>
        </Grid>
        <Grid lg={8} md={8}></Grid>
      </Grid>
    </div>
  );
};

export default Details;
