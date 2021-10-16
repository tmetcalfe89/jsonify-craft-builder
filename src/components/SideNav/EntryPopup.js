import React, { useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import AutoForm from '../AutoForm'

const formDescription = {
  name: {
    type: 'text'
  },
  type: {
    type: 'select',
    internalLabel: 'Types',
    options: ['item', 'block']
  }
}

const defaultData = {
  name: '',
  type: 'invalid'
}

function EntryPopup ({ shown, hide, save }) {
  const [data, setData] = useState(defaultData)
  const ref = useRef()
  formDescription.name.ref = ref

  const submit = () => {
    if (data.type === 'invalid') return
    save(data.name, data.type)
    hide()
  }

  const formSubmit = (e) => {
    e.preventDefault()
    submit()
  }

  const resetForm = () => {
    setData(defaultData)
  }

  return (
    <Modal show={shown} onExited={resetForm} onShow={() => ref.current.focus()}>
      <Modal.Header closeButton onHide={hide}>
        <Modal.Title>Add new entry</Modal.Title>
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

export default EntryPopup
