import React, { useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import AutoForm from '../AutoForm'

const formDescription = {
  name: {
    type: 'text'
  }
}

const defaultData = {
  name: ''
}

function GroupPopup ({ shown, hide, save }) {
  const [data, setData] = useState(defaultData)
  const ref = useRef()
  formDescription.name.ref = ref

  const submit = () => {
    save(data.name)
    hide()
  }

  const formSubmit = e => {
    e.preventDefault()
    submit()
  }

  return (
    <Modal
      show={shown}
      onExited={() => setData(defaultData)}
      onShow={() => ref.current.focus()}
    >
      <Modal.Header closeButton onHide={hide}>
        <Modal.Title>Add new group</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AutoForm
          description={formDescription}
          data={data}
          setData={setData}
          submit={formSubmit}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={hide}>
          Close
        </Button>
        <Button variant='primary' onClick={submit}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GroupPopup
