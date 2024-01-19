import Card from '../Card/Card';
import styles from './Drivers.module.scss';

const Drivers = ({ arrayDrivers }) => {
  return (
    <div className={styles.drivers_container}>
      {arrayDrivers?.map((driver) => {
        return(
          <Card
            key={driver.driver_id}
            driver_id={driver.driver_id}
            driver_name={driver.driver_name}
            lastname={driver.lastname}
            image={driver.image}
            // nationality={driver.nationality}
            dob={driver.dob}
            // description={driver.description}
            teams={driver.teams}
          />
        )
      })}
    </div>
  )
}

export default Drivers;