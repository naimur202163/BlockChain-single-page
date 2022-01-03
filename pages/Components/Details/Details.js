import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Details = () => {
  return (
    <div>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid lg={8} md={8}>
            <Box>
              <div>
                <Button>Click here</Button>
              </div>
              {/* Heading Text */}
              <div>
                <Typography variant="h3">Blockchain Simplified</Typography>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.Amet minim mollit non
                  deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam
                  consequat sunt nostrud amet.
                </p>
              </div>
              {/* Techonology */}
              <div>
                <div>
                  <typography variant="h5">Technologies Covered</typography>
                </div>
                <div>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid md={2} lg={2}></Grid>
                      <Grid md={2} lg={2}></Grid>
                      <Grid md={2} lg={2}></Grid>
                      <Grid md={2} lg={2}></Grid>
                      <Grid md={2} lg={2}></Grid>
                    </Grid>
                  </Box>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid lg={8} md={8}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Details;