import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.scss';
const URL = 'http://localhost:3001/drivers';


const Detail = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState({})

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const { data } = await axios(`${URL}/${id}`);

        if (data.length > 0) {
          setDriver(data[0])
        } else {
          window.alert ('Detail not found')
        }

      } catch (error) {
        console.error('This is what happened: ', error.message)
        window.alert('Invalid ID. Please, try another one.')
      }
    }

    fetchDetail();
  }, [id])

  return (
    <div className={styles.detail_container}>
      {driver.driver_name && (
        <>
        <div className={styles.container_1}>
          <div id={styles.name_wrapper}>
            <h2>{driver.driver_name}</h2>
            <h2>{driver.lastname}</h2>
            <img src={driver.image} alt={driver.lastname}/>
          </div>

          <div className={styles.container_2}>
            <div id={styles.nationality_wrapper}>
              <h3>Nationality:</h3>
              <h4>{driver.nationality}</h4>
            </div>

            <div id={styles.birthdate_wrapper}>
              <h3>Birthdate:</h3>
              <h4>{driver.dob}</h4>
            </div>
          </div>

        </div>

        <div className={styles.container_3}>
          <h4>ID: {driver.driver_id}</h4>
          
          {driver.origin === 'db' ? <h4>Source: Database</h4> : 
          <h4>Source: API</h4>}
        </div>

        <div className={styles.teams_wrapper}>
          <h3>Teams:</h3>
          <h4>{driver.teams}</h4>
        </div>

        <div className={styles.description_wrapper}>
          <h3>Description:</h3> 
          <p>{driver.description}</p>
        </div>

        </>
      )}
    </div>
  )
}

export default Detail;