import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ConfirmPopup ({ shown, hide, confirm }) {
  const confirmMe = () => {
    hide()
    confirm()
  }

  return (
    <Modal show={shown}>
      <Modal.Body>
        Are you sure?
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={hide}>No</Button>
        <Button variant='primary' onClick={confirmMe}>Yes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmPopup
