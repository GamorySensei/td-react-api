import React from 'react'

function Employee({data, handleEdit }) {
  return (
    <tr>
        <td width="70px"><img src={ data.image } alt="" style={ {height: '50px'}}/></td>
        <td>{ data.firstName }</td>
        <td>{ data.lastName }</td>
        <td><button className='btn' onClick={ () => handleEdit(data.id) }>Modifier</button></td>
    </tr>
  )
}

export default Employee