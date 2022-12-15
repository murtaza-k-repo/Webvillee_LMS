import moment from "moment";
import React, { useRef } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import certificate from "../../assets/img/certificate.jpg";
import { LinkedinCertification } from "linkedin-certification";

import { ImDownload, ImLinkedin } from "react-icons/im";

import { exportComponentAsPNG } from "react-component-export-image";

import "./index.css";

const PreviousAttempt = ({ show, setShow }) => {
  const certificateRef = useRef();

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Level 1</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Image
          className="certImg"
          src={certificate}
          alt="certificate"
          rounded
          ref={certificateRef}
        />
        <div className="d-flex flex-row justify-content-between mt-4">
          <span>
            <strong>Score:</strong> 70/100
          </span>
          <span className="text-secondary">{moment().fromNow()}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* For large screen only */}
        <Button
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
        {/* For large screen only */}

        {/* For small & medium screen only */}
        {/* <Button
          className="d-lg-none"
          variant="success"
          title="Download Certificate"
        >
          <ImDownload size={25} />
        </Button>
        <div className="linkedInBtn d-lg-none" title="Share on LinkedIn">
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
                <ImLinkedin size={25} />
              </button>
            }
          />
        </div> */}
        {/* For small & medium screen only */}
      </Modal.Footer>
    </Modal>
  );
};

export default PreviousAttempt;
