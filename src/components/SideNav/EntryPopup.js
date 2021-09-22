import React, { useRef, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function EntryPopup ({ shown, hide, save, types = ['item', 'block'] }) {
  const [name, setName] = useState('')
  const [type, setType] = useState('invalid')
  const ref = useRef()

  const submit = () => {
    if (type === 'invalid') return
    save(name, type)
    hide()
  }

  const formSubmit = e => {
    e.preventDefault()
    submit()
  }

  const resetForm = () => {
    setName('')
    setType('invalid')
  }

  return (
    <Modal show={shown} onExited={resetForm} onShow={() => ref.current.focus()}>
      <Modal.Header closeButton onHide={hide}>
        <Modal.Title>Add new item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formSubmit}>
          <Form.Group className='mb-3'>
            <Form.Control
              ref={ref}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select value={type} onChange={e => setType(e.target.value)}>
              <option value='invalid'>Type</option>
              {types.map((type, ti) => (
                <option value={type} key={`type-option-${ti}`}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={hide}>
          Close
        </Button>
        <Button variant='primary' onClick={() => submit(name)}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EntryPopup
