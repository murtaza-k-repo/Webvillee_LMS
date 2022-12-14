import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { IoIosArrowDroprightCircle as RightArrow } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import Carousel from "../Utility/Carousel";
import Navbar from "../Utility/Navbar";
import moment from "moment";

import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleLevelClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.id !== "") {
      navigate(`/test/${e.target.id}`);
    }
  };

  return (
    <>
      <Navbar />
      <Carousel />
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="mb-3 dashboard">
              <Card.Title className="p-3 dashboard-title">
                <h4>Tests</h4>
              </Card.Title>
              <Card.Body className="dashboard-body">
                <ul className="levels" onClick={(e) => handleLevelClick(e)}>
                  <li id={"easy1"}>
                    Easy <RightArrow />
                  </li>
                  <li id={"medium2"}>
                    Medium <RightArrow />
                  </li>
                  <li id={"intermediate3"}>
                    Intermediate <RightArrow />
                  </li>
                  <li id={"Advanced4"}>
                    Advanced <RightArrow />
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="mb-3 dashboard">
              <Card.Title className="p-3 dashboard-title">
                <h4>Previous Attempts</h4>
              </Card.Title>
              <Card.Body className="dashboard-body">
                <ul className="attempts" onClick={() => setShow(true)}>
                  <li className="justify-content-between">
                    <div>
                      <h6>Level 1</h6>
                      <p className="m-0">Score: 70/100</p>
                      <p
                        className="m-0 text-secondary mt-2"
                        style={{ fontSize: "smaller" }}
                      >
                        {moment("2022/12/12").fromNow()}
                      </p>
                    </div>
                    <div className="icons">
                      <AiOutlineRight />
                    </div>
                  </li>
                  <li className="justify-content-between">
                    <div>
                      <h6>Level 2</h6>
                      <p className="m-0">Score: 80/100</p>
                      <p
                        className="m-0 text-secondary mt-2"
                        style={{ fontSize: "smaller" }}
                      >
                        {moment("2022/12/11").fromNow()}
                      </p>
                    </div>
                    <div className="icons">
                      <AiOutlineRight />
                    </div>
                  </li>
                  <li className="justify-content-between">
                    <div>
                      <h6>Level 3</h6>
                      <p className="m-0">Score: 72/100</p>
                      <p
                        className="m-0 text-secondary mt-2"
                        style={{ fontSize: "smaller" }}
                      >
                        {moment("2022/12/11").fromNow()}
                      </p>
                    </div>
                    <div className="icons">
                      <AiOutlineRight />
                    </div>
                  </li>
                  <li className="justify-content-between">
                    <div>
                      <h6>Level 4</h6>
                      <p className="m-0">Score: 75/100</p>
                      <p
                        className="m-0 text-secondary mt-2"
                        style={{ fontSize: "smaller" }}
                      >
                        {moment("2022/12/10").fromNow()}
                      </p>
                    </div>
                    <div className="icons">
                      <AiOutlineRight />
                    </div>
                  </li>
                  <li className="justify-content-between">
                    <div>
                      <h6>Level 1</h6>
                      <p className="m-0">Score: 70/100</p>
                      <p
                        className="m-0 text-secondary mt-2"
                        style={{ fontSize: "smaller" }}
                      >
                        {moment("2022/12/10").fromNow()}
                      </p>
                    </div>
                    <div className="icons">
                      <AiOutlineRight />
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShow(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          {/* <Col xs={6} lg={3}>
            <Card className="mb-3">
              <Card.Body className="level-body">
                <h5 className="text-center">
                  Easy <RightArrow />
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={3}>
            <Card className="mb-3">
              <Card.Body className="level-body">
                <h5 className="text-center">
                  Medium <RightArrow />
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={3}>
            <Card className="mb-3">
              <Card.Body className="level-body">
                <h5 className="text-center">
                  Intermediate <RightArrow />
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={3}>
            <Card className="mb-3">
              <Card.Body className="level-body">
                <h5 className="text-center">
                  Advanced <RightArrow />
                </h5>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Home;
