import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Project } from "./components/project";
import { About } from "./components/about";

export default function App() {
  const [pageshown, setPageShown] = useState(0);

  return (
    <main>
      <Container>
        <Row className=" justify-content-between px-4 px-md-0">
          <Col
            className="sidebar rounded-3 position-relative text-white"
            md={4}
          >
            <div className="profile_details text-center">
              <div className="profile_img position-absolute transform-middle ">
                <img className="rounded-3" src="https://placehold.co/200x200" />
              </div>
              <h1>Micheal Okosun</h1>
              <p className="">FontEnd Engineer</p>
              <div className="social_icons ">
                <Stack
                  direction="horizontal"
                  className="justify-content-center"
                  gap={5}
                >
                  <div className="">
                    <i
                      class="bi bi-facebook"
                      style={{ color: "blue", fontSize: "1.5rem" }}
                    ></i>
                  </div>
                  <div className="">
                    <i
                      class="bi bi-twitter"
                      style={{ color: "#51BBFE", fontSize: "1.5rem" }}
                    ></i>
                  </div>
                  <div className="">
                    <i
                      class="bi bi-instagram"
                      style={{ color: "#ff7a7a", fontSize: "1.5rem" }}
                    ></i>
                  </div>
                  <div className="">
                    <i
                      class="bi bi-linkedin"
                      style={{ color: "#054A91", fontSize: "1.5rem" }}
                    ></i>
                  </div>
                </Stack>
              </div>
            </div>
            {/*----- end of profile details  */}
            {/*----- start of social links */}

            <div className="social_links py-4  px-5 m-3 ">
              <Stack gap={1}>
                <div className="d-flex border-bottom pb-2 gap-2 justify-content-start align-items-center">
                  <div className=" rounded">
                    <i class="bi bi-phone fs-4 "></i>
                  </div>
                  <div>
                    <p style={{ fontSize: ".9rem" }} className="m-0">
                      Phone
                    </p>
                    <span style={{ fontSize: ".8rem" }} className="fw-bold">
                      09134205031
                    </span>
                  </div>
                </div>
                <div className="d-flex border-bottom pb-2 gap-2 justify-content-start align-items-center">
                  <div className=" rounded">
                    <i class="bi bi-envelope-check fs-4 "></i>
                  </div>
                  <div>
                    <p style={{ fontSize: ".9rem" }} className="m-0">
                      Email
                    </p>
                    <span style={{ fontSize: ".8rem" }} className="fw-bold">
                      Michealoko6@gmail.com
                    </span>
                  </div>
                </div>
                <div className="d-flex border-bottom pb-2 gap-2 justify-content-start align-items-center">
                  <div className=" rounded">
                    {/* <i class="bi bi-geo-alt-fill fs-3"></i> */}
                    <i class="bi bi-pin-map fs-4"></i>
                  </div>
                  <div>
                    <p style={{ fontSize: ".9rem" }} className="m-0">
                      Location
                    </p>
                    <span style={{ fontSize: ".8rem" }} className="fw-bold">
                      Benin City , Edo State
                    </span>
                  </div>
                </div>
              </Stack>
            </div>
            {/* ----- end fo solical links  */}
            <div className="cv_Download text-center mb-5">
              <Button variant="primary" size="lg">
                Download Cv
              </Button>
            </div>
            {/* ============ end of download btn  */}
            {/* start of content  */}
          </Col>
          <Col className="content rounded-3 mt-5  border" md={6}>
            {pageshown == 0 ? <About /> : pageshown == 1 ? <Project /> : null}
          </Col>
          <Col className="navigation mt-5 text-light d-none d-md-block" md={2}>
            <ul className="rounded-3">
              <li
                onClick={() => setPageShown(0)}
                className="rounded-3 p-4 text-center"
              >
                <a href="#">
                  <i class="bi bi-person-vcard"></i>
                  <br />
                  About
                </a>
              </li>
              <li className="rounded-3 bg-primary p-3  text-center">
                <a className="text-light" href="#">
                  <i class="bi bi-person-lines-fill"></i> <br />
                  Contact
                </a>
              </li>
              <li
                onClick={() => setPageShown(1)}
                className="rounded-3 p-3  text-center"
              >
                <a href="#">
                  <i class="bi bi-list-task"></i>
                  <br />
                  Project
                </a>
              </li>
            </ul>
          </Col>
          {/* mobile navigation */}
          <Col className="navigation bg-light d-block d-md-none mt-5 text-light fixed-bottom" md={2}>
            <ul className="rounded-3 pb-3 flex-row w-100 justify-content-between">
              <li
                onClick={() => setPageShown(0)}
                className="rounded-3 p-2 text-center"
              >
                <a href="#">
                  <i class="bi bi-person-vcard"></i>
                  <br />
                  About
                </a>
              </li>
              <li className="rounded-3 bg-primary p-1  text-center">
                <a className="text-light" href="#">
                  <i class="bi bi-person-lines-fill"></i> <br />
                  Contact
                </a>
              </li>
              <li
                onClick={() => setPageShown(1)}
                className="rounded-3 p-1  text-center"
              >
                <a href="#">
                  <i class="bi bi-list-task"></i>
                  <br />
                  Project
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
