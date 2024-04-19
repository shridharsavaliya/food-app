import React from 'react'
import "../../Assets/css/commonsection.css"

export default function Commonsection(props) {
  return (
    <div className='common-bg'>
      <div className='container'>
            <h1 className='text-white display-3'>{props.title}</h1>
      </div>
    </div>
  )
}
