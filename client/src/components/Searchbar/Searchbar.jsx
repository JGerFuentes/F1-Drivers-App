import { useState } from 'react';
import styles from './Searchbar.module.scss';

const Searchbar = ({ onSearch }) => {
  const [name, setName] = useState('')

  const onChange = (event) => {
    setName(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onChange(event);
      onSearch(name);
      setName('');
    }
  }

  return (
    <div className={styles.searchbar_container}>
      <input type='search' onChange={onChange} onKeyDown={handleKeyDown} value={name} placeholder='Name or lastname...'/>
      <button className={styles.search_button} onClick={() => {onSearch(name); setName('')}} >🔍</button>
    </div>
  )
}

export default Searchbar;