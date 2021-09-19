import React from 'react'
import { Button } from "react-bootstrap"
import { Trash } from 'react-bootstrap-icons'

function DeleteButton({ variant, onClick }) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", padding: "0.5rem" }}
    >
      <Trash />
    </Button>
  )
}

export default DeleteButton
