import React from "react"

function HeaderCallbakHook() {
    console.log('header render')
  return (
    <div>
      <h2>Header</h2>
    </div>
  )
}

export default React.memo(HeaderCallbakHook)
