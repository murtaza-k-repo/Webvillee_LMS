import React from "react";
import { Spinner } from "react-bootstrap";
import "./index.css";

const LoadingSpinner = () => {
  return (
    <div className="centerElement text-white d-flex flex-column align-items-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h6 className="mt-3">Loading...</h6>
    </div>
  );
};

export default LoadingSpinner;
