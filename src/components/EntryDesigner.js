import React from 'react'
import AutoForm from './AutoForm'

const formTypes = {
  item: {
    name: {
      type: 'text',
      label: 'Item Name',
      note: 'This will automatically be converted to snake_case'
    }
  },
  block: {
    name: {
      type: 'text',
      label: 'Block Name',
      note: 'This will automatically be converted to snake_case'
    }
  }
}

function EntryDesigner ({ entry = {}, updateEntry }) {
  return (
    <AutoForm
      description={formTypes[entry.type]}
      data={entry}
      setData={updateEntry}
    />
  )
}

export default EntryDesigner
