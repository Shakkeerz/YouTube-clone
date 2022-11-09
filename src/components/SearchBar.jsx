import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
function SearchBar() {
  return (
    <div onSubmit={()=>{}} className="flex items-center justify-between rounded-full bg-white  border border-[#e3e3e3] relative sm:mr-5 h-10 " >
        <input
        className='search-bar pl-2 text-black'
        type="text"
        placeholder="Search..."
        value=""
        onChange={()=>{}}
        />
        <AiOutlineSearch type='submit' className='cursor-pointer z-[10] text-red-700 absolute right-2'/>
    </div>
  )
}

export default SearchBar