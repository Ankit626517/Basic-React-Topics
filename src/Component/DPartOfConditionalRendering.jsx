// Conditional Rendering 
import React, { useState } from 'react'

function DPartOfConditionalRendering(props) {

  return ( 
     props.isLoggedIn ? <h2>Welocom {props.username}</h2> : <h2>pleas log in first</h2> 
    
    )

}

export default DPartOfConditionalRendering
