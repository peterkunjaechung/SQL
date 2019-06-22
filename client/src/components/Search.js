import React, { useState } from 'react'

const Search = (props) => {
  const [search, setSearch] = useState('')

  return (
    <form onSubmit={props.searchName}>
      <input onChange={(e) => setSearch(e.target.value)} />
      <button onClick={(e) => props.searchName(e, search)}>Search</button>
    </form>
  )
}

export default Search
