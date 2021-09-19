import React from 'react'
import { ListGroup } from 'react-bootstrap'
import DeleteButton from './DeleteButton'

function EntryLine({ g, i, name, deleteEntry, updateActiveItemIndex }) {
  const selectMe = (e) => {
    updateActiveItemIndex(g, i);
  }

  const deleteMe = (e) => {
    e.stopPropagation();
    deleteEntry(g, i);
  }

  return (
    <ListGroup.Item action as="div" onClick={selectMe} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {name}
      <DeleteButton variant="secondary" onClick={deleteMe} />
    </ListGroup.Item>
  )
}

export default EntryLine
