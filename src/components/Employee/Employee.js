import React from 'react'

function Employee({data}) {
  return (
    <tr>
        <td width="70px"><img src={ data.image } alt="" style={ {height: '50px'}}/></td>
        <td>{ data.firstName }</td>
        <td>{ data.lastName }</td>
    </tr>
  )
}

export default Employee