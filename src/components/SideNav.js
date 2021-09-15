import React, { useState } from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { CaretDownFill, CaretRightFill, PlusCircle, PlusCircleFill, Trash } from 'react-bootstrap-icons'
import GroupPopup from './GroupPopup';
import EntryPopup from './EntryPopup';

function SideNav({ groups, updateActiveGroup, updateActiveItem, createGroup, createItem, deleteItem }) {
  const [showGroup, setShowGroup] = useState(groups.map(e => false));

  const updateShowGroup = (i) => {
    const showGroupTemp = [...showGroup];
    showGroupTemp[i] = !showGroupTemp[i];
    setShowGroup(showGroupTemp);
  }

  const updateActiveItemIndex = (g, i) => {
    updateActiveGroup(g);
    updateActiveItem(i);
  }

  const [displayGroupPopup, setDisplayGroupPopup] = useState(false);
  const showGroupPopup = () => setDisplayGroupPopup(true);
  const hideGroupPopup = () => setDisplayGroupPopup(false);

  const [displayEntryPopup, setDisplayEntryPopup] = useState(false);
  const showEntryPopup = () => setDisplayEntryPopup(true);
  const hideEntryPopup = () => setDisplayEntryPopup(false);

  const [addingGroup, setAddingGroup] = useState(0);
  const addItem = (name, type) => {
    createItem(addingGroup, name, type);
  }
  
  const deleteEntry = (e, g, i) => {
    console.log(e);
    e.stopPropagation();
    deleteItem(g, i);
  }

  return (
    <>
      <Row>
        <Col>
          <h1>Groups</h1>
        </Col>
      </Row>
      <Row style={{ overflowY: "auto", flexShrink: "1", flexGrow: "1" }}>
        <Col>
          <ListGroup variant="flush">
            {groups.map((group, g) => (
              <>
                <ListGroup.Item action variant={showGroup[g] ? "dark" : ""} onClick={() => updateShowGroup(g)} key={`sidenav-group-${g}`} style={{ display: "flex", alignItems: "center" }}>
                  {showGroup[g] ? <CaretDownFill style={{ marginRight: "0.6rem" }} /> : <CaretRightFill style={{ marginRight: "0.6rem" }} />}
                  {group.name}
                </ListGroup.Item>
                {showGroup[g] && group.items.map((item, i) =>
                  <ListGroup.Item action as="div" onClick={() => updateActiveItemIndex(g, i)} key={`sidenav-item-${g}-${i}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {item.name}
                    <Button variant="secondary" style={{ display: "flex", alignItems: "center", padding: "0.5rem" }} onClick={(e) => deleteEntry(e, g, i)}>
                      <Trash />
                    </Button>
                  </ListGroup.Item>
                )}
                {showGroup[g] && <ListGroup.Item action className="d-grid gap-2" as="div" onClick={() => {
                  setAddingGroup(g);
                  showEntryPopup();
                }}>
                  <Button variant="secondary">
                    <PlusCircle />
                  </Button>
                </ListGroup.Item>}
              </>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row style={{ paddingBottom: "0.5rem" }}>
        <Col className="d-grid gap-2">
          <Button variant="primary" onClick={showGroupPopup}>
            <PlusCircleFill />
          </Button>
        </Col>
      </Row>
      <GroupPopup shown={displayGroupPopup} hide={hideGroupPopup} save={createGroup} />
      <EntryPopup shown={displayEntryPopup} hide={hideEntryPopup} save={addItem} />
    </>
  )
}

export default SideNav
