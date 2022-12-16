import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { IoIosArrowDroprightCircle as RightArrow } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import Carousel from "../Utility/Carousel";
import moment from "moment";
import axios from "axios";

import "./index.css";
import { useNavigate } from "react-router-dom";
import PreviousAttempt from "../PreviousAttempt";

const Home = ({ user }) => {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLevelClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.id !== "") {
      navigate(`/test/${e.target.id}`);
    }
  };

  const getUserInfo = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_LMS_API}/get-user-info/${user.uid}`
      );

      setUserInfo(data);
    } catch (err) {
      if (err?.response?.data?.msg?.includes("no user found")) {
        navigate("/user-info", { replace: true });
      } else {
        setError(err?.response?.data?.msg);
      }
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
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
          <PreviousAttempt show={show} setShow={setShow} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
