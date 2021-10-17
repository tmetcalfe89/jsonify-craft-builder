import Button from "@restart/ui/esm/Button";
import React, { useRef } from "react";
import {
  Modal,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useCss, useToggle } from "react-use";

function GroupOptionsPopup({ shown, hide, deleteMe, renameMe, exportGroup }) {
  const listGroupItemStyle = useCss({
    textAlign: "center",
    "&:hover": { fontWeight: "bold" },
  });
  const [showRenamer, toggleShowRenamer] = useToggle(false);
  const renameRef = useRef(null);

  const rename = () => {
    renameMe(renameRef.current.value);
    toggleShowRenamer(false);
    hide();
  };

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
          {!showRenamer ? (
            <ListGroupItem
              action
              onClick={toggleShowRenamer}
              className={listGroupItemStyle}
            >
              Rename
            </ListGroupItem>
          ) : (
            <ListGroupItem>
              <InputGroup>
                <FormControl ref={renameRef} />
                <Button variant="outline-secondary" onClick={rename}>
                  Rename
                </Button>
              </InputGroup>
            </ListGroupItem>
          )}
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
