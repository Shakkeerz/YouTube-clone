import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearch, setRecentSearch] = useState([]);
  const [showRecentSearch, setshowRecentSearch] = useState(false);
  const [showMubileSearch, setShowMubileSearch] = useState(false);

  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`search/${searchTerm}`);
    }
    // setRecentSearch([...[searchTerm]])
    let id = 0;
    setRecentSearch((prevRecent) => [
      ...new Set([...prevRecent, [parseInt(id++), searchTerm]]),
    ]);
    setSearchTerm("");
    setshowRecentSearch(false);
  };
  useEffect(() => {
    // console.log(recentSearch);
  }, [recentSearch]);

  // useEffect(()=>{
  // inputRef.focus()
  // },[])
  return (
    <form
      onSubmit={handleSubmit}
      className={` ${
        showMubileSearch && "w-full"
      } md:w-[350px] flex items-center justify-between rounded-full bg-white  border border-[#e3e3e3] relative sm:mr-5  h-10`}
    >
      <input
        ref={inputRef}
        className={`${
          showMubileSearch ? "block " : "hidden"
        }w-full md:block search-bar pl-2 text-black`}
        type="text"
        placeholder="click here or / to Search..."
        value={searchTerm}
        onClick={(e) => {
          setshowRecentSearch(true);
          // (e.target) ? console.log("clicked on input box") : console.log("outside clicked")

          //  setshowRecentSearch(false)
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />
      <AiOutlineSearch
        type="submit"
        className="cursor-pointer z-[10] text-red-700 absolute right-2"
        onClick={() => setShowMubileSearch(true)}
      />

      {/* displaying recent searches */}
      {showRecentSearch && (
        <div className="absolute z-10 bg-black top-10 right-0 left-0 max-h-[300px] h-auto rounded-2xl overflow-y-scroll">
         {Array.from(recentSearch).map((item,index,array)=> <li>{b}</li> )}
        </div>
      )}
    </form>
  );
}

export default SearchBar;
