import React from 'react'
const ShowModalButton = ({setActive}) => {
  return (
    <button className='btn btn-primary' onClick={() => setActive(true)}>Open modal</button>
  )
}

export default ShowModalButton