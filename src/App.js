import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "./components/SideNav";
import EntryDesigner from "./components/EntryDesigner";
import ConfirmPopup from "./components/ConfirmPopup";
import { useLocalStorage } from "react-use";

function App() {
  const [groups, setGroups] = useLocalStorage("groups", []);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmCallback, setConfirmCallback] = useState(() => {});
  const displayConfirm = (cb) => {
    setShowConfirm(true);
    setConfirmCallback(() => cb);
  };
  const hideConfirm = () => setShowConfirm(false);

  const createGroup = (name) => {
    setGroups([...groups, { name, items: [] }]);
  };

  const createItem = (g, name, type) => {
    const groupsTemp = [...groups];
    groupsTemp[g].items.push({
      type,
      name,
    });
    setGroups(groupsTemp);
  };

  const deleteItem = (g, i) => {
    const actuallyDeleteItem = () =>
      setGroups(
        groups.map((group, gg) => ({
          ...group,
          items: group.items.filter((item, ii) => !(i === ii && g === gg)),
        }))
      );
    displayConfirm(actuallyDeleteItem);
  };

  const deleteGroup = (g) => {
    const actuallyDeleteGroup = () =>
      setGroups(groups.filter((group, gg) => gg !== g));
    displayConfirm(actuallyDeleteGroup);
  };

  const updateEntry = (entryData) => {
    setGroups(
      groups.map((group, gg) => ({
        ...group,
        items: group.items.map((item, ii) =>
          !(activeItemIndex === ii && activeGroupIndex === gg)
            ? item
            : entryData
        ),
      }))
    );
  };

  const renameGroup = (g, name) => {
    const clone = [...groups];
    clone[g].name = name;
    setGroups(clone);
  };

  return (
    <>
      <Container fluid style={{ height: "100vh", overflowY: "hidden" }}>
        <Row>
          <Col
            sm="3"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <SideNav
              groups={groups}
              updateActiveGroup={setActiveGroupIndex}
              updateActiveItem={setActiveItemIndex}
              createGroup={createGroup}
              createItem={createItem}
              deleteItem={deleteItem}
              deleteGroup={deleteGroup}
              renameGroup={renameGroup}
            />
          </Col>
          <Col>
            <EntryDesigner
              entry={groups[activeGroupIndex]?.items[activeItemIndex]}
              updateEntry={updateEntry}
            />
          </Col>
        </Row>
      </Container>
      <ConfirmPopup
        shown={showConfirm}
        hide={hideConfirm}
        confirm={confirmCallback}
      />
    </>
  );
}

export default App;
