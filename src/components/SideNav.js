import React, { useState } from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { PlusCircleFill } from 'react-bootstrap-icons'
import GroupPopup from './GroupPopup'
import EntryPopup from './EntryPopup'
import GroupLine from './SideNav/GroupLine'

function SideNav ({
  groups,
  updateActiveGroup,
  updateActiveItem,
  createGroup,
  createItem,
  deleteItem,
  deleteGroup
}) {
  const updateActiveItemIndex = (g, i) => {
    updateActiveGroup(g)
    updateActiveItem(i)
  }

  const [displayGroupPopup, setDisplayGroupPopup] = useState(false)
  const showGroupPopup = () => setDisplayGroupPopup(true)
  const hideGroupPopup = () => setDisplayGroupPopup(false)

  const [displayEntryPopup, setDisplayEntryPopup] = useState(false)
  const showEntryPopup = () => setDisplayEntryPopup(true)
  const hideEntryPopup = () => setDisplayEntryPopup(false)

  const [addingGroup, setAddingGroup] = useState(0)
  const addItem = (name, type) => {
    createItem(addingGroup, name, type)
  }

  const deleteEntry = (g, i) => {
    deleteItem(g, i)
  }

  return (
    <>
      <Row>
        <Col>
          <h1>Groups</h1>
        </Col>
      </Row>
      <Row style={{ overflowY: 'auto', flexShrink: '1', flexGrow: '1' }}>
        <Col>
          <ListGroup variant='flush'>
            {groups.map((group, g) => (
              <GroupLine
                key={`sidenav-group-${g}`}
                g={g}
                group={group}
                deleteGroup={deleteGroup}
                updateActiveItemIndex={updateActiveItemIndex}
                deleteEntry={deleteEntry}
                setAddingGroup={setAddingGroup}
                showEntryPopup={showEntryPopup}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row style={{ paddingBottom: '0.5rem' }}>
        <Col className='d-grid gap-2'>
          <Button variant='primary' onClick={showGroupPopup}>
            <PlusCircleFill />
          </Button>
        </Col>
      </Row>
      <GroupPopup
        shown={displayGroupPopup}
        hide={hideGroupPopup}
        save={createGroup}
      />
      <EntryPopup
        shown={displayEntryPopup}
        hide={hideEntryPopup}
        save={addItem}
      />
    </>
  )
}

export default SideNav
