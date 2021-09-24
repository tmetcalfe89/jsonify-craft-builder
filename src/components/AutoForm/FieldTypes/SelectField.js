import React from 'react'
import { Form } from 'react-bootstrap'

function SelectField ({
  description: { label, internalLabel, note, ref, options = [] },
  value,
  updateValue
}) {
  const updateMe = e => {
    updateValue(e.target.value)
  }

  return (
    <Form.Select value={value} onChange={updateMe} ref={ref}>
      {internalLabel && <option value='invalid'>{internalLabel}</option>}
      {options.map(option =>
        typeof option === 'string' ? (
          <option key={`option-${option}`}>{option}</option>
        ) : (
          <option value={option.value} key={`option-${option.value}`}>
            {option.label}
          </option>
        )
      )}
    </Form.Select>
  )
}

export default SelectField
