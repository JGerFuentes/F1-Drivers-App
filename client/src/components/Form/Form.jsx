import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDriver } from '../../redux/actions';
// import validations from '../../utils/validations';


const Form = ({ arrayTeams }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    driver_name: '',
    lastname:'',
    nationality:'',
    image:'',
    dob:'',
    description:'',
    teams: []
  });

  const [errors, setErrors] = useState({
    driver_name: '',
    lastname:'',
    nationality:'',
    image:'',
    dob:'',
    description:'',
    teams: []
  });

  const handleOnChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value
    });

    setErrors(
      validations({
      ...userInput,
      [event.target.name]: event.target.value
      })
    )
  }

  const handleCheckboxChange = (team) => {
    //Creo una copia del arreglo de la propiedad 'teams'.
    let selectedTeams = [...userInput.teams];

    //Verifico si el 'team' seleccionado ya se encuentra en el arreglo original.
    //Si no está, lo añado. Si está, lo elimino/filtro de la copia del arreglo.
    if (!userInput.teams.includes(team)) {
      selectedTeams.push(team)
    } else {
      selectedTeams = selectedTeams.filter(option => option!== team)
    }
    
    //Actualizo el valor de la propiedad 'teams' preservando el estado del resto del objeto 'userInput'.
    setUserInput({
      ...userInput,
      teams: selectedTeams
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      dispatch(
        addDriver({
          driver_name: userInput.driver_name,
          lastname:userInput.lastname,
          image: userInput.image,
          nationality: userInput.nationality,
          dob: userInput.dob,
          description: userInput.description,
          teams: userInput.teams
        })
      );
      navigate('/home');
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input key='driver_name' type='' value={userInput.driver_name} onChange={handleOnChange} placeholder="Insert your driver's name here..."/>

        <label htmlFor="lastname">Lastname: </label>
        <input key='lastname' type='' value={userInput.lastname} onChange={handleOnChange} placeholder="Insert your driver's lastname here..."/>

        <label htmlFor="nationality">Nationality: </label>
        <input key='nationality' type='' value={userInput.nationality} onChange={handleOnChange} placeholder="Insert your driver's nationality..."/>

        <label htmlFor="dob">Date of birth: </label>
        <input key='dob' type='date' value={userInput.dob} onChange={handleOnChange} placeholder='Insert a birthdate...'/>

        <label htmlFor="description">Description: </label>
        <input key='description' type='' value={userInput.description} onChange={handleOnChange} placeholder='Insert a description'/>
        
        <label htmlFor="image">Image: </label>
        <input key='image' type='' value={userInput.image} onChange={handleOnChange} placeholder='Select a profile pic...'/>

        <div>Select your driver's teams: 
          {arrayTeams && arrayTeams?.map(team => {
            return (
              <label key={team}>
                <input
                  type='checkbox'
                  value={team}
                  checked={userInput.teams.includes(team)}
                  onChange={() => handleCheckboxChange(team)}
                />{team}
              </label>
            )
          })
          }
        </div>

        <button type='submit'>Create my driver!</button>

      </form>
    </div>
  )
}

export default Form;