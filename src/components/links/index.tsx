import React from 'react'
import './Links.css'

interface Props {
  links: string[]
}

const Links:React.FC<Props> = ({links}) => {
  return (
    <div className="Links">
      { links && links.map(link => {
        return (<p>{link}</p>)
      })}
    </div>
  )
}

export default Links