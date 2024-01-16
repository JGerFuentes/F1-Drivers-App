import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({driver_id, driver_name, lastname, image, teams}) => {
  return (
    <Link to={ `/detail/${driver_id}` }>
      <div key={driver_id} className={styles.card}>
        <div id={styles.info_container}>
          <h2>{lastname},</h2>
          <h2>{driver_name}</h2>
          <img src={image} alt={`${lastname}, ${driver_name}'s pic` } height="250px" width="250px"/>
          {/* <h3>Birthdate: {dob}</h3> */}
        </div>
          
          <div id={styles.teams_container}>
            <h3>Teams:</h3>
            { teams?.map((team, index) => {
              return(
                  <h4 key={index}>{team}</h4>
              )
            }) }
          </div>
      </div>
    </Link>
  )
}

export default Card;