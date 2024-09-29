import React, { useState } from 'react'

function DPartOfConditionalRendering() {

    let  [status , setStatus ] = useState(false);
  return (
    <>
      <button onClick={()=>setStatus(!status)  } >{status ? 'Hide ' : 'Show'}</button>
      {
        (status) ? <p>"Hello i am coder"</p>
        :
        ''
      }
    </>
  )
}

export default DPartOfConditionalRendering
