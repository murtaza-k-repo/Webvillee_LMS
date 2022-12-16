import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { exportComponentAsPNG } from "react-component-export-image";
import { ImDownload, ImLinkedin } from "react-icons/im";
import certificate from "../../assets/img/certificate.jpg";
import { LinkedinCertification } from "linkedin-certification";
import "./index.css";

const Result = ({ results, data, onReset, onAnswersCheck, userInfo }) => {
  //   console.log("dataDirect", results);

  const certificateRef = useRef();

  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    myResult();
  }, []);

  const myResult = () => {
    let correct = 0;
    results.forEach((result, i) => {
      if (result.a === data[i].answer) {
        return correct++;
      }
      // console.log("res===>",result)
      // console.log("data===>", data)
    });
    setCorrectAnswers(correct);
  };
  return (
    <Container className="centerElement">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card>
            {/* <Card.Title className="p-3 text-center">
              <h4>Score</h4>
            </Card.Title> */}
            <Card.Body className=" text-center mt-3">
              <Image
                className="certImg"
                src={certificate}
                alt="certificate"
                rounded
                ref={certificateRef}
              />
              <div className="d-flex flex-row justify-content-center mt-4  ">
                <span>
                  <h5>
                    <strong>{userInfo?.first_Name + "'s"} Score:</strong>{" "}
                    {correctAnswers} out of {data.length}
                  </h5>
                </span>
                {/* <span className="text-secondary">{moment().fromNow()}</span> */}
              </div>

              <Image
                className="certImg d-none"
                src={certificate}
                alt="certificate"
                rounded
                ref={certificateRef}
              />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center text-center">
              {/* <Button
                style={{ width: "190px", margin: "10px" }}
                variant="primary"
              >
                Share on Linkedin
              </Button>
              <Button
                style={{ width: "190px", margin: "10px" }}
                variant="success"
              >
                Download Certificate
              </Button> */}

              <Button
                className="me-2"
                variant="success"
                title="Download Certificate"
                onClick={() => exportComponentAsPNG(certificateRef)}
              >
                <span className="d-flex align-items-center">
                  <ImDownload size={25} />{" "}
                  <span className="d-none d-lg-block">
                    {" "}
                    &nbsp; Download Certificate
                  </span>
                </span>
              </Button>
              <div className="linkedInBtn" title="Share on LinkedIn">
                <LinkedinCertification
                  certificationName="Webvillee Certification"
                  organizationName="Webvillee Technology Pvt Ltd"
                  issuedMonth={12}
                  issuedYear={2022}
                  expirationMonth={12}
                  expirationYear={2023}
                  certificateId="29c2e87e-5c1c-11ec-bf63-0242ac130002"
                  certificateURL="https://templatelab.com/wp-content/uploads/2018/11/Certificate-employee-1-e1542525135159-790x558.jpg"
                  newTab={true}
                  customButton={
                    <button
                      style={{
                        backgroundColor: "#0A66C2",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      <span className="d-flex align-items-center">
                        <ImLinkedin size={25} />{" "}
                        <span className="d-none d-lg-block">
                          &nbsp; Share on LinkedIn
                        </span>{" "}
                      </span>
                    </button>
                  }
                />
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Result;
