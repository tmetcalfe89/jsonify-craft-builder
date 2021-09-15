import React from 'react'

function EntryMaker({ entry: {type} = {} }) {
  return (
    <div>
      {type}
    </div>
  )
}

export default EntryMaker
