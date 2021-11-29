import React from "react";
import resume from "../../../../images/resume.png";
import onsAuto from "../../../../images/onsAuto.png";
import onsTour from "../../../../images/onsTour.png";
import onsMedico from "../../../../images/onsMedico.png";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Button from "@restart/ui/esm/Button";

const Resume = () => {
  return (
    <div id="resume" className="container my-5">
      <h1 data-aos="fade-down" className="heading mb-5">
        <span>Projects</span>
        <hr
          className="m-0 p-0 fw-bold"
          style={{ width: "50px", height: "3px" }}
        />
      </h1>
      <div className="row g-3">
        <div className="col-md-12 col-lg-6">
          <Card
            className="bg-dark text-light"
            style={{ border: "1px solid black" }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={onsAuto}
              alt="green iguana"
            />
            <CardContent className="row">
              <Typography
                className="col-8 fw-bold"
                gutterBottom
                variant="h6"
                component="div"
              >
                E-commerce Car Selling -{" "}
                <span style={{ fontStyle: "italic" }}>
                  onsAuto-React-Project
                </span>
              </Typography>
              <CardActions className="col-4" style={{ textDecoration: "none" }}>
                <h6 className="float-right">
                  <a
                    className="btn btn-light rounded-pill"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/shihab-2021/onsAuto-React-Project/tree/main/onsAuto-client-side-code"
                  >
                    <i class="fab fa-git"></i>
                  </a>
                </h6>
                <h6>
                  <a
                    className="btn btn-light rounded-pill"
                    style={{ textDecoration: "none" }}
                    href="https://onsauto-6360e.web.app/"
                  >
                    <i className="fas fa-link"></i>
                  </a>
                </h6>
              </CardActions>
            </CardContent>
          </Card>
        </div>
        <div className="col-md-12 col-lg-6">
          <Card
            className="bg-dark text-light"
            style={{ border: "1px solid black" }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={onsMedico}
              alt="green iguana"
            />
            <CardContent className="row">
              <Typography
                className="col-8 fw-bold"
                gutterBottom
                variant="h6"
                component="div"
              >
                Simple Medical Care -{" "}
                <span style={{ fontStyle: "italic" }}>
                  ONSmedico-React-Project
                </span>
              </Typography>
              <CardActions className="col-4" style={{ textDecoration: "none" }}>
                <h6 className="float-right">
                  <a
                    className="btn btn-light rounded-pill"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/shihab-2021/ONSmedico-React-Project"
                  >
                    <i class="fab fa-git"></i>
                  </a>
                </h6>
                <h6>
                  <a
                    className="btn btn-light rounded-pill"
                    style={{ textDecoration: "none" }}
                    href="https://onsmedico.web.app/"
                  >
                    <i className="fas fa-link"></i>
                  </a>
                </h6>
              </CardActions>
            </CardContent>
          </Card>
        </div>
        <div className="col-md-12 col-lg-6">
          <Card
            className="bg-dark text-light"
            style={{ border: "1px solid black" }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={onsTour}
              alt="green iguana"
            />
            <CardContent className="row">
              <Typography
                className="col-8 fw-bold"
                gutterBottom
                variant="h6"
                component="div"
              >
                Tour Management -{" "}
                <span style={{ fontStyle: "italic" }}>
                  onsTour-React-Project
                </span>
              </Typography>
              <CardActions className="col-4" style={{ textDecoration: "none" }}>
                <h5 className="float-right d-flex justify-content-between">
                  <a
                    className="btn btn-light rounded-pill"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/shihab-2021/onsTour-React-Project/tree/main/onsTour"
                  >
                    <i class="fab fa-git"></i>
                  </a>
                </h5>
                <h5>
                  <a
                    className="btn btn-light rounded-circle"
                    style={{ textDecoration: "none" }}
                    href="https://onstour-e8adb.web.app/"
                  >
                    <i className="fas fa-link"></i>
                  </a>
                </h5>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
