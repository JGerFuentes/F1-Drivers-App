import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDriver } from '../../redux/actions';
import validations from '../../utils/validations';


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
    );
  };
  
  const handleCheckboxChange = (team) => {
    let selectedTeams = [...userInput.teams];

    if (!userInput.teams.includes(team)) {
      selectedTeams.push(team)
    } else {
      selectedTeams = selectedTeams.filter(option => option!== team)
    }
    
    setUserInput({
      ...userInput,
      teams: selectedTeams
    })

    setErrors(
      validations({
      ...userInput,
      teams: selectedTeams
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      dispatch(
        addDriver({
          driver_name: userInput.driver_name,
          lastname:userInput.lastname,
          nationality: userInput.nationality,
          image: userInput.image,
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
        <input 
          key='driver_name'
          name='driver_name'
          type='text' 
          value={userInput.driver_name} 
          onChange={handleOnChange} 
          placeholder="Your driver's name here..."
        />
        <p>{errors.driver_name}</p>

        <label htmlFor="lastname">Lastname: </label>
        <input 
          key='lastname'
          name='lastname'
          type='text' 
          value={userInput.lastname} 
          onChange={handleOnChange} 
          placeholder="Your driver's lastname..."
        />
        <p>{errors && errors.lastname}</p>

        <label htmlFor="nationality">Nationality: </label>
        <input 
          key='nationality'
          name='nationality'
          type='text' 
          value={userInput.nationality} 
          onChange={handleOnChange} 
          placeholder="Your driver's nationality..."
        />
        <p>{errors.nationality}</p>

        <label htmlFor="dob">Date of birth: </label>
        <input 
          key='dob'
          name='dob'
          type='text' 
          value={userInput.dob} 
          onChange={handleOnChange} 
          placeholder="Valid format 'yyyy-mm-dd'"
        />
        <p>{errors.dob}</p>

        <label htmlFor="image"> Profile pic: </label>
        <input 
          key='image'
          name='image' 
          type='text' 
          value={userInput.image}
          onChange={handleOnChange}
          placeholder="Insert an URL here..."
        />
        <p>{errors.image}</p>

        <label htmlFor="description">Description: </label>
        <textarea
          key='description'
          name='description'
          value={userInput.description}
          onChange={handleOnChange}
          rows={10}
          columns={20}
          minLength={15}
          maxLength={2501}
          placeholder="Insert a brief description here..."
        />
        <p>{errors.description}</p>
    
        <div>
          Select your driver's teams:
          <p>{errors.teams}</p>

          {arrayTeams?.map(team => {
            return (
              <label key={team} htmlFor="teams">
                <input
                  type='checkbox'
                  name='teams'
                  value={team}
                  checked={userInput.teams.includes(team)}
                  onChange={() => handleCheckboxChange(team)}
                  />
                  {team}
              </label>
            )
            })
          }
        </div>
        
        <button type='submit' disabled={Form.driver_name || Object.keys(errors).length}>Create my driver!</button>
      </form>
    </div>
  )
}

export default Form;