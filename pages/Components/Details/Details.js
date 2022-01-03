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
                <Typography>Blockchain Simplified</Typography>
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
