import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDriver } from '../../redux/actions';
import validations from '../../utils/validations';
import styles from './Form.module.scss';


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
      try {
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
        window.alert ('Congratulations! Your driver has been successfully created!')
        navigate('/home');
      } catch (error) {
        window.alert (error.message)
      }
    }
  }

  return (
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <label htmlFor="name">Name: </label>
          <input
            className={styles.text_input} 
            key='driver_name'
            name='driver_name'
            type='text' 
            value={userInput.driver_name} 
            onChange={handleOnChange} 
            placeholder="Your driver's name here..."
          />
        <p className="error_message">{errors.driver_name}</p>

        <label htmlFor="lastname">Lastname: </label>
          <input
            className={styles.text_input} 
            key='lastname'
            name='lastname'
            type='text' 
            value={userInput.lastname} 
            onChange={handleOnChange} 
            placeholder="Your driver's lastname..."
          />
        <p className="error_message">{errors.lastname}</p>

        <label htmlFor="nationality">Nationality: </label>
          <input
            className={styles.text_input} 
            key='nationality'
            name='nationality'
            type='text' 
            value={userInput.nationality} 
            onChange={handleOnChange} 
            placeholder="Your driver's nationality..."
          />
        <p className="error_message">{errors.nationality}</p>

        <label htmlFor="dob">Date of birth: </label>
          <input
            className={styles.text_input} 
            key='dob'
            name='dob'
            type='text' 
            value={userInput.dob} 
            onChange={handleOnChange} 
            placeholder="Valid format 'yyyy-mm-dd'"
          />
        <p className="error_message">{errors.dob}</p>

        <label htmlFor="image"> Profile pic: </label>
          <input
            className={styles.text_input} 
            key='image'
            name='image' 
            type='text' 
            value={userInput.image}
            onChange={handleOnChange}
            placeholder="Insert an URL here..."
          />
        <p className="error_message">{errors.image}</p>

        <label htmlFor="description">Description: </label>
          <textarea
            id={styles.description_input} 
            key='description'
            name='description'
            value={userInput.description}
            onChange={handleOnChange}
            rows={15}
            cols={40}
            minLength={15}
            maxLength={2501}
            placeholder="Insert a brief description here..."
          />
        <p className="error_message">{errors.description}</p>
    
        <h5>Select your driver's teams:</h5>
        <p className="error_message">{errors.teams}</p>
        <div id={styles.allTeams_container}>
          {arrayTeams?.map(team => {
            return (
              <label id={styles.teams_labels} key={team} htmlFor="teams">
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
        
        <button type='submit' disabled={Form.driver_name || Object.keys(errors).length}>Machine, create my driver!</button>

        {/* <div className={styles.nav_buttons}>
          {!creation && 
            <button onClick={() => {navigate('/home')}}>Back to the list</button>
          }
        </div> */}

      </form>
    
  )
}

export default Form;