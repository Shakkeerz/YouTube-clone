import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Videos } from "./index";
import { fetchFromApi } from "../utilty/FetchFromApi";
import { useParams } from "react-router-dom";

function Feed() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {searchTerm} = useParams()
  console.log(searchTerm)

  useEffect(() => {
    // fetchData(selectedCatogory)
    setLoading(true);
    fetchFromApi(`/search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setData(data.items);
        setLoading(false);
        // console.log(res);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    // console.log("data", data);
  }, [searchTerm]);

  return (
    <section className="flex relative md:static  ">
      

      <div className="text-[20px] md:text-3xl h-[90vh] mt-[50px] md:mt-0 w-full flex flex-col mb-2 overflow-auto md:p-5 font-bold ">
        <div className="flex ">
          Search results for: {searchTerm}
          <p className="  text-[#f31503] ml-2"> videos</p>
        </div>
        {loading ? <div>Loading...</div> : <Videos videos={data} />}
        {error && <div className="text-red-500 ">{error.message}</div>}
      </div>
    </section>
  );
}

export default Feed;
