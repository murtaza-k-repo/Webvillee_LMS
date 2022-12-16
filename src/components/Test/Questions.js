import "./index.css";

import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Questions = ({
  data,
  onAnswerUpdate,
  noOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const radioWrapper = useRef();
  useEffect(() => {
    const findCheckedInput =
      radioWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);
  const changeHandler = (e) => {
    setSelected(e.target.value);
  };
  const handleClickNext = (e) => {
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.questionText, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < noOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  const handleClickPrev = (e) => {
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.questionText, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < noOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion - 1);
    } else {
      onSetStep(3);
    }
  };
  return (
    <Container className="centerElement">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Title className="p-3">
              <h4 style={{ textAlign: "left" }}>Q. {data.questionText}</h4>
            </Card.Title>
            <Card.Body className="p-3">
              <div className="control" ref={radioWrapper}>
                {data.options.map((option, i) => {
                  return (
                    <label className="radio" key={i}>
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        onChange={changeHandler}
                      />
                      &nbsp; {option}
                    </label>
                  );
                })}
              </div>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button
                className="btn me-2"
                onClick={handleClickPrev}
                disabled={activeQuestion === 0}
              >
                Prev
              </Button>
              <Button className="btn" onClick={handleClickNext}>
                Next
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Questions;
