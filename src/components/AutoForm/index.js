import React from "react";
import { Form } from "react-bootstrap";
import FieldTypes from "./FieldTypes";

function AutoForm({
  description = {},
  data = {},
  setData = () => {},
  submit = (e) => e.preventDefault(),
}) {
  const updateField = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  return (
    <Form onSubmit={submit}>
      {Object.entries(description).map(([id, fieldDescription], i, arr) => {
        const FieldElement = FieldTypes[fieldDescription.type];
        const { label, note } = fieldDescription;
        return (
          <Form.Group className={i === arr.length - 1 ? null : "mb-3"}>
            {label && <Form.Label>{label}</Form.Label>}
            <FieldElement
              description={fieldDescription}
              value={data[id]}
              updateValue={(value) => updateField(id, value)}
              key={`field-element-${id}`}
            />
            {note && <Form.Text>{note}</Form.Text>}
          </Form.Group>
        );
      })}
    </Form>
  );
}

export default AutoForm;
