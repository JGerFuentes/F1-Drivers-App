import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
        console.error('Ocurrio lo siguiente: ', error)
        return ({error: error.message})
      }
    }

    fetchDetail();
  }, [id])

  return (
    <div>
      {driver.driver_name && (
        <>
        <h2>{driver.driver_name}</h2>
        <h2>{driver.lastname}</h2>

        <img src={driver.image} alt={driver.lastname} heigth="200px" width="200px"></img>

        <h3>Nationality:</h3>
        <h4>{driver.nationality}</h4>

        <h3>Birthdate:</h3>
        <h4>{driver.dob}</h4>

        <h3>Teams:</h3>
        <h4>{driver.teams}</h4>

        <h3>Description:</h3> 
        <p>{driver.description}</p>

        <h4>ID: {driver.driver_id}</h4>
        
        {driver.origin === 'db' ? <h4>Source: Database</h4> : <h4>Source: API</h4>}
        </>
      )}
    </div>
  )
}

export default Detail;