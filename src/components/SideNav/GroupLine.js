import React, { useRef, useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import {
  CaretDownFill,
  CaretRightFill,
  PlusCircle,
  ThreeDots,
} from "react-bootstrap-icons";
import { useHoverDirty } from "react-use";
import EntryLine from "./EntryLine";
import GroupOptionsPopup from "./GroupOptionsPopup";

function GroupLine({
  g,
  group,
  deleteGroup,
  deleteEntry,
  updateActiveItemIndex,
  setAddingGroup,
  showEntryPopup,
}) {
  const [showEntries, setShowEntries] = useState(false);

  const groupLineRef = useRef(null);
  const groupLineHovered = useHoverDirty(groupLineRef);

  const [displayOptionPopup, setDisplayOptionPopup] = useState(false);
  const showOptionPopup = () => setDisplayOptionPopup(true);
  const hideOptionPopup = () => setDisplayOptionPopup(false);

  const deleteMe = (e) => {
    e.stopPropagation();
    deleteGroup(g);
  };

  return (
    <>
      <ListGroup.Item
        action
        as="div"
        variant={showEntries ? "dark" : ""}
        onClick={() => setShowEntries(!showEntries)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        ref={groupLineRef}
      >
        {showEntries ? (
          <CaretDownFill style={{ marginRight: "0.6rem" }} />
        ) : (
          <CaretRightFill style={{ marginRight: "0.6rem" }} />
        )}
        {group.name}
        {/* <DeleteButton variant="secondary" onClick={deleteMe} /> */}
        <span style={{ visibility: groupLineHovered ? "" : "hidden" }}>
          <Button variant="secondary" onClick={showOptionPopup}>
            <ThreeDots />
          </Button>
        </span>
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
          className="d-grid gap-2"
          as="div"
          onClick={() => {
            setAddingGroup(g);
            showEntryPopup();
          }}
        >
          <Button variant="secondary">
            <PlusCircle />
          </Button>
        </ListGroup.Item>
      )}
      <GroupOptionsPopup
        shown={displayOptionPopup}
        hide={hideOptionPopup}
        deleteMe={deleteMe}
        exportGroup={() => {}}
      />
    </>
  );
}

export default GroupLine;
