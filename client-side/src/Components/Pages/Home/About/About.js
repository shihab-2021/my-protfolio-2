import React from "react";
import ownerPhoto from "../../../../images/about-owner.jpg";
import "./About.css";
import CountUp from "react-countup";

const About = () => {
  return (
    <div id="aboutMe">
      <div className="container my-5">
        <h1 data-aos="fade-down" className="heading">
          <span>Me, Myself</span>
          <hr
            className="m-0 p-0 fw-bold"
            style={{ width: "50px", height: "3px" }}
          />
        </h1>
        <h5 className="text-muted">
          I have worked both in web and software development. But currently
          doing web development seriously. I can develop website by using HTML,
          CSS, JavaScript, React.js, Bootstrap, Tailwind and so on. I have did
          more than 12 web project. I can adjust with innovative tach or new
          feature of programming easily.
        </h5>
        <br />
        <div className="bg-secondary p-3 formal-info">
          <div className="row align-items-center">
            <h3 data-aos="fade-right" className="heading text-info">
              Formal Information
              <hr
                className="m-0 p-0 fw-bold"
                style={{ width: "50px", height: "3px" }}
              />
            </h3>
            <div
              style={{ fontSize: "30px" }}
              className="col-12 col-md-8 text-light"
            >
              <p>
                Here is my some other formal information down below, so you can
                judge me more easily.
              </p>
              <div id="about" className="row px-1">
                <div className="col container">
                  <ul className="px-2">
                    <li>
                      <span className="text-danger fw-bold">{">"}</span>{" "}
                      <span className="fw-bold">Birthday: </span> 5 August 2001
                    </li>
                    <li>
                      <span className="text-danger fw-bold">{">"}</span>{" "}
                      <span className="fw-bold">Age: </span> 20
                    </li>
                    <li>
                      <span className="text-danger fw-bold">{">"}</span>{" "}
                      <span className="fw-bold">City: </span>
                      Chittagong, Bangladesh
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="px-2">
                    <li>
                      <span className="text-danger fw-bold">{">"}</span>{" "}
                      <span className="fw-bold">Degree: </span>
                      CSE(in 2 year)
                    </li>
                    <li>
                      <span className="text-danger fw-bold">{">"}</span>{" "}
                      <span className="fw-bold">Phone: </span>
                      01643433981
                    </li>
                    <li>
                      <span className="text-danger fw-bold">{">"}</span>{" "}
                      <span className="fw-bold">Email: </span>
                      shihab77023@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <img
                id="about-img"
                style={{ borderRadius: "20px" }}
                data-aos="zoom-in-up"
                className="img-fluid"
                src={ownerPhoto}
                alt=""
              />
            </div>
          </div>
        </div>
        <br />
        <h5 className="text-muted ">
          I also know Basic C programing, C++, Java(Basic). I have a little bit
          knowledge of Object Oriented Programming and Data Structures and
          Algorithm. Also idea of database management system. Made project by
          using Mongodb and MySQL.
        </h5>
        <div className="pt-4">
          <h2 data-aos="flip-left" className="heading text-primary">
            Fact
            <hr
              className="m-0 p-0 fw-bold"
              style={{ width: "50px", height: "3px" }}
            />
          </h2>
          <h5 className="py-1 text-muted">
            The number of project that I have done and solved problems in
            various online judge are showing below.
          </h5>
          <div className="row py-4">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              className="col-12 col-md-4 text-center py-3"
            >
              <h1 className="number">
                <i className="fa-solid fa-list-check text-info"></i>{" "}
                <CountUp end={13} duration={5} />
              </h1>
              <h5>Web Project</h5>
              <h5>number</h5>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              className="col-12 col-md-4 text-center py-3"
            >
              <h1 className="number">
                <i class="fas fa-clipboard-check text-info"></i>{" "}
                <CountUp end={200} duration={5} />
              </h1>
              <h5>Problem Solving</h5>
              <h5>number</h5>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              className="col-12 col-md-4 text-center py-3"
            >
              <h1 className="number">
                <i class="fa-brands fa-uncharted text-info"></i>{" "}
                <CountUp end={0} duration={5} />
              </h1>
              <h5>Software Project</h5>
              <h5>number</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
