import React from 'react'

function Employee({data}) {
  return (
    <div>
        <img src={ data.image } alt=""/>
        <h5>{ data.firstName } { data.lastName }</h5>
    </div>
  )
}

export default Employee