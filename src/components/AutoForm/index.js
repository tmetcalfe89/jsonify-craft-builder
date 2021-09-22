import React from 'react'
import FieldTypes from './FieldTypes'
import { Button } from 'react-bootstrap'

function AutoForm ({ description = {}, data = {}, setData = () => {} }) {
  const updateField = (key, value) => {
    setData({
      ...data,
      [key]: value
    })
  }

  return Object.entries(description).map(([id, fieldDescription]) => {
    const FieldElement = FieldTypes[fieldDescription.type]
    return (
      <FieldElement
        description={fieldDescription}
        value={data[id]}
        updateValue={value => updateField(id, value)}
      />
    )
  })
}

export default AutoForm
