import './css/OutputWindow.css'
import React from "react";


export default function OutputWindow ({output, compileStatus}) {
  const textMode = (compileStatus === 0) ? 'success' : 'error'

  return (
    <div className={`output-textbox ${textMode}`} >
      {output}
    </div>
  )
}