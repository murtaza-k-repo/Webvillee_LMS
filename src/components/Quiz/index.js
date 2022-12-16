import "./index.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const index = ({ onQuizStart }) => {
  return (
    <Container className="centerElement">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Title className="p-3 dashboard-title">
              <h4>Instructions</h4>
            </Card.Title>
            <Card.Body>
              <ol>
                <li>
                  Select an answer for every question. Unanswered questions will
                  be scored as incorrect.
                </li>
                <li>
                  Click the radio button to indicate your choice. Currently,
                  only one answer can be selected for a multiple choice
                  question.
                </li>
                <li>
                  Click on the Submit button at the bottom of the page to have
                  your answers graded.
                </li>
                <li>
                  You will be shown your results at the end, including your
                  score.
                </li>
                <li>
                  You will able to download certificate on completion and also
                  can share the same on LinkedIn.
                </li>
              </ol>
            </Card.Body>

            <Card.Footer className="text-center">
              <Button variant="primary" onClick={onQuizStart} className="btn">
                Start Quiz
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
