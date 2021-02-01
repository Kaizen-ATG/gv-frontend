import React, { useState } from "react";
import AddPointsForm from "./AddPointsForm";
import Success from "./Success";

const AddPoints = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <AddPointsForm submitForm={submitForm} /> : <Success />}
    </>
  );
};

export default AddPoints;
