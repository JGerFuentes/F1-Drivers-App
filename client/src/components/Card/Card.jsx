import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({name, lastname, image, teams}) => {
  return (
    <div>This is the Card component
      <Link to={ `/detail/${id}` }>
        <h2>{lastname},</h2>
        <h2>{name}</h2>
        <img src={image} alt={lastname}/>
        { teams?.forEach(team => {
          return(
            <h4>
              {team}
            </h4>
          )
        })}
      </Link>
    </div>
  )
}

export default Card