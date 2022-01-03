import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../img/Image.png";
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
              <hr />
              {/* Techonology */}
              <div>
                <div>
                  <div>
                    <Typography>Technologies Covered</Typography>
                  </div>
                  <div>
                    <Grid sx={{ mt: 4, ml: 1 }} container spacing={2}>
                      <Grid md={2} lg={2}>
                        <div className="box">
                          <Typography sx={{ textAlign: "center" }}>
                            C++
                          </Typography>
                        </div>
                      </Grid>
                      <Grid md={2} lg={2}>
                        <div className="box">
                          <Typography sx={{ textAlign: "center" }}>
                            C++
                          </Typography>
                        </div>
                      </Grid>
                      <Grid md={2} lg={2}>
                        <div className="box">
                          <Typography sx={{ textAlign: "center" }}>
                            C++
                          </Typography>
                        </div>
                      </Grid>
                      <Grid md={2} lg={2}>
                        <div className="box">
                          <Typography sx={{ textAlign: "center" }}>
                            C++
                          </Typography>
                        </div>
                      </Grid>
                      <Grid md={2} lg={2}>
                        <div className="box">
                          <Typography sx={{ textAlign: "center" }}>
                            C++
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  {/* Mentor */}
                  <br />
                  <br />
                  <hr />
                  <div>
                    <Grid container spacing={1}>
                      <Grid md={6} lg={6}>
                        <Grid container spacing={1}>
                          <Grid md={4} lg={4}>
                            <div>
                              <div>
                                <Typography>Mentor</Typography>
                              </div>
                              <div>
                                <div>
                                  <img
                                    src="https://i.ibb.co/R2fTGk4/Image.png"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <Typography>
                                    
                                     
                                      Dr. 
                                  Anthony
                                    <br />
                                    M.Tech
                                  </Typography>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid md={4} lg={4}></Grid>
                          <Grid md={4} lg={4}></Grid>
                        </Grid>
                      </Grid>
                      <Grid md={6} lg={6}></Grid>
                    </Grid>
                  </div>
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
