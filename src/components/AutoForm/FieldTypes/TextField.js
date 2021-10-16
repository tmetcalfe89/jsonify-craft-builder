import React from "react";
import { Form } from "react-bootstrap";

function TextField({
  description: { label, note, process = (e) => e, ref },
  value,
  updateValue,
}) {
  const updateMe = (e) => {
    updateValue(process(e.target.value));
  };

  return <Form.Control value={value} onChange={updateMe} ref={ref} />;
}

export default TextField;
