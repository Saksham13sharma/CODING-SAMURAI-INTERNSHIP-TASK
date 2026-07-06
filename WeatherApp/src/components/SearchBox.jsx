import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBox = ({onSearch}) => {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    if (city.trim() === '') return
      onSearch(city)
  }

  return (
    <div className='flex mt-6 border  border-violet-400'>
      <input
        type='text'
        placeholder='Enter your city...'
        value={city}
        className='py-1 px-2 w-60 outline-none'
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e)=>{
    if(e.key==="Enter"){
      handleSearch();
    }
  }}
      />
      <button
        onClick={handleSearch}
        className='bg-violet-500 text-violet-900 px-5 py-1 hover:bg-violet-700 cursor-pointer flex justify-center items-center hover:text-white '>
        <IoIosSearch size={20}/>
      </button>
    </div>
  )
}

export default SearchBox
