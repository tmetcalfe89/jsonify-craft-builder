import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "./components/SideNav";
import EntryDesigner from "./components/EntryDesigner";

function App() {
  const [groups, setGroups] = useState([]);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const createGroup = (name) => {
    setGroups([...groups, { name, items: [] }])
  }

  const createItem = (g, name, type) => {
    const groupsTemp = [...groups];
    groupsTemp[g].items.push({
      type,
      name
    });
    setGroups(groupsTemp);
  }

  const deleteItem = (g, i) => {
    setGroups(groups.map((group, gg) => ({ ...group, items: group.items.filter((item, ii) => !(i === ii && g === gg)) })))
  }

  const deleteGroup = (g) => {
    setGroups(groups.filter((group, gg) => gg !== g));
  }

  return (
    <Container fluid style={{ height: "100vh", overflowY: "hidden" }}>
      <Row>
        <Col sm="3" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <SideNav groups={groups} updateActiveGroup={setActiveGroupIndex} updateActiveItem={setActiveItemIndex} createGroup={createGroup} createItem={createItem} deleteItem={deleteItem} deleteGroup={deleteGroup} />
        </Col>
        <Col>
          <EntryDesigner entry={groups[activeGroupIndex]?.items[activeItemIndex]} />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
