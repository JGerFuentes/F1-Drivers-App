import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({driver_id, driver_name, lastname, image, teams}) => {
  return (
    <Link to={ `/detail/${driver_id}` }>
      <div key={driver_id}>
          <h2>{lastname},</h2>
          <h2>{driver_name}</h2>
          <img src={image} alt={`${lastname}, ${driver_name}'s pic`}/>
          <div>
            TEAMS:
            { teams?.map((team, index) => {
              return(
                  <h4 key={index}>
                  {team}
                  </h4>
              )
            }) }
          </div>
      </div>
    </Link>
  )
}

export default Card;