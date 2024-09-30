import React from 'react'
import DPartOfConditionalRendering from './DPartOfConditionalRendering'

function DMainConditionalRendering() {
  return (
    <div>
      <DPartOfConditionalRendering isLoggedIn={true}  username="Ankit626517" />
    </div>
  )
}

export default DMainConditionalRendering
