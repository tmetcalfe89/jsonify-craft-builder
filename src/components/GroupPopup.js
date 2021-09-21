import React, { useRef, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function GroupPopup ({ shown, hide, save }) {
  const [name, setName] = useState('')
  const ref = useRef()

  const submit = () => {
    save(name)
    hide()
  }

  const formSubmit = (e) => {
    e.preventDefault()
    submit()
  }

  return (
    <Modal show={shown} onExited={() => setName('')} onShow={() => ref.current.focus()}>
      <Modal.Header closeButton onHide={hide}>
        <Modal.Title>Add new group</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formSubmit}>
          <Form.Group className='mb-3'>
            <Form.Control ref={ref} value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={hide}>Close</Button>
        <Button variant='primary' onClick={() => submit(name)}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GroupPopup
