import React from 'react'
import { Form } from 'react-bootstrap'

function TextField ({ description: { label, note }, value, updateValue }) {
  const updateMe = e => {
    updateValue(e.target.value)
  }

  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control value={value} onChange={updateMe} />
      {note && <Form.Text>{note}</Form.Text>}
    </Form.Group>
  )
}

export default TextField
