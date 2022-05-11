import React from 'react'

function StatuseType({className,type}) {
  return (
    <div>
        <span className={className}/>
        <p>{type}</p>
    </div>
  )
}

export default StatuseType