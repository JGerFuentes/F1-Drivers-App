import React, { useState } from 'react'

const Searchbar = ({ onSearch }) => {
  const [name, setName] = useState('')

  const onChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <input type='search' onChange={onChange} value={name} placeholder='Name or lastname...'/>
      <button onClick={() => {onSearch(name); setName('')}}>🔍</button>
    </div>
  )
}

export default Searchbar;