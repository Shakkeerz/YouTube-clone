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
        placeholder="Search..."
        value={searchTerm}
        onClick={(e) => {
          setshowRecentSearch(true);
          // (e.target) ? console.log("clicked on input box") : console.log("outside clicked")

          //  setshowRecentSearch(false)
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AiOutlineSearch
        type="submit"
        className="cursor-pointer z-[10] text-red-700 absolute right-2"
        onClick={() => setShowMubileSearch(true)}
      />

      {/* displaying recent searches */}
      {showRecentSearch && (
        <div className="absolute z-10 bg-black top-10 right-0 left-0 max-h-[300px] h-auto rounded-2xl overflow-y-scroll">
          {recentSearch?.sort().map((recentItem,index) => (
            <Link key={index} to={""} className="p-2 flex justify-between">
              <li onClick={()=>setSearchTerm(recentItem)}>{recentItem}</li>
              <span className="text-blue-500 cursor-pointer hover:underline">
                Remove
              </span>
            </Link>
          ))}
        </div>
      )}
    </form>
  );
}

export default SearchBar;
