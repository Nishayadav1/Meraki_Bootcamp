import React from 'react'
import PropTypes from 'prop-types'

function Person(p) {
  return (
    <div>
       <h1>namste{p.name}</h1>
       <h1>namste{p.age}</h1>
    </div>
  )
}

Person.prototype={
  name:PropTypes.string,
  age:PropTypes.number
}

export default Person
