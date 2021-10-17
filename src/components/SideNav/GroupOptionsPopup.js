import React from "react";
import { Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import { useCss } from "react-use";

function GroupOptionsPopup({ shown, hide, deleteMe, exportGroup }) {
  const listGroupItemStyle = useCss({
    textAlign: "center",
    "&:hover": { fontWeight: "bold" },
  });

  return (
    <Modal show={shown}>
      <Modal.Header closeButton onHide={hide}>
        <Modal.Title>Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroupItem
            action
            onClick={exportGroup}
            variant="primary"
            className={listGroupItemStyle}
          >
            Export
          </ListGroupItem>
          <ListGroupItem
            action
            onClick={deleteMe}
            variant="danger"
            className={listGroupItemStyle}
          >
            Delete
          </ListGroupItem>
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}

export default GroupOptionsPopup;
