import ComB from './ComB'
import { CreateContext } from 'react'

export const nameContext= CreateContext()




function ComA() {
  return (
    <div>
      <nameContext.Provider value={'nisha'}>
        <ComB/>
      </nameContext.Provider>
    </div>
  )
}

export default ComA
