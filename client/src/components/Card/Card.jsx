import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({driver_id, driver_name, lastname, image, dob, teams}) => {
  return (
    <Link to={ `/detail/${driver_id}` }>
      <div key={driver_id} className={styles.card}>
        
        <div id={styles.name_wrapper}>
          <h2>{lastname}, {driver_name}</h2>
        </div>

        <div id={styles.image_container}>
          <img src={image} alt={`${lastname}, ${driver_name}'s pic` }/>
        </div>

        <div id={styles.dob_container}>
          <h3>{dob}</h3>
        </div>

        <div id={styles.teams_wrapper}>
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