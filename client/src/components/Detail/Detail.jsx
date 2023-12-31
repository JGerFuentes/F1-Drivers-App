import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const URL = 'http://localhost:3001/drivers/';
import axios from 'axios';


const Detail = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState({})

  useEffect(() => {
    axios(`${URL}/${id}`).then(
      ({ data }) => {
        if (data.driver_name) {
          setDriver(data)
        } else {
          window.alert('No info available for this driver')
        }
      }
    );
    return setDriver({})
  }, [id])

  return (
    <div>
      {driver.driver_name && (
        <>
        <h2>{driver.driver_name && driver.lastname}</h2>
        <image src={driver.image} alt={driver.lastname}></image>
        <h2>Nationality: {driver.nationality}</h2>
        <h2>Birthdate: {driver.dob}</h2>
        <h2>Teams: {driver.teams}</h2>
        <h2>Description: {driver.description}</h2>
        {/* <h2>Source & ID: {driver.id && driver.origin}</h2> */}
        </>
      )}
    </div>
  )
}

export default Detail