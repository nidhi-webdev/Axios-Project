import React from 'react'

const Card = ({ curelem }) => {
    console.log("From Card Component", curelem);
    
  return (
    <div>
     <img src={curelem.Poster} />
    </div>
  )
}

export default Card
