import React, { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import {
  CaretDownFill,
  CaretRightFill,
  PlusCircle
} from 'react-bootstrap-icons'
import DeleteButton from './DeleteButton'
import EntryLine from './EntryLine'

function GroupLine ({
  g,
  group,
  deleteGroup,
  deleteEntry,
  updateActiveItemIndex,
  setAddingGroup,
  showEntryPopup
}) {
  const [showEntries, setShowEntries] = useState(false)

  const deleteMe = e => {
    e.stopPropagation()
    deleteGroup(g)
  }

  return (
    <>
      <ListGroup.Item
        action
        as='div'
        variant={showEntries ? 'dark' : ''}
        onClick={() => setShowEntries(!showEntries)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {showEntries
          ? (
            <CaretDownFill style={{ marginRight: '0.6rem' }} />
            )
          : (
            <CaretRightFill style={{ marginRight: '0.6rem' }} />
            )}
        {group.name}
        <DeleteButton variant='secondary' onClick={deleteMe} />
      </ListGroup.Item>
      {showEntries &&
        group.items.map((item, i) => (
          <EntryLine
            key={`sidenav-item-${g}-${i}`}
            g={g}
            i={i}
            name={item.name}
            deleteEntry={deleteEntry}
            updateActiveItemIndex={updateActiveItemIndex}
          />
        ))}
      {showEntries && (
        <ListGroup.Item
          action
          className='d-grid gap-2'
          as='div'
          onClick={() => {
            setAddingGroup(g)
            showEntryPopup()
          }}
        >
          <Button variant='secondary'>
            <PlusCircle />
          </Button>
        </ListGroup.Item>
      )}
    </>
  )
}

export default GroupLine
