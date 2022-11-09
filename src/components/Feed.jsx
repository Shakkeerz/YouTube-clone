import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SideBar, Videos } from "./index";
import { fetchFromApi } from "../utilty/FetchFromApi";

function Feed() {
  const [selectedCatogory, setSelectedCategory] = useState("New");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(selectedCatogory);
  

  useEffect(() => {
    // fetchData(selectedCatogory)
    setLoading(true);
    fetchFromApi(`/search?part=snippet&q=${selectedCatogory}`)
      .then((data) => {
        setData(data.items);
        setLoading(false)
        // console.log(res);
      })
      .catch((err) => {
        setError(err);
        setLoading(false)
      });
      // console.log("data", data);


    }, [selectedCatogory]);


  return (
    <section className="flex">
      <div className="h-[100px]  md:w-1/5  md:h-[92vh]  border-r-2 border-opacity-50 border-[gray] p-5 md:overflow-y-scroll">
        <SideBar
          selectedCatogory={selectedCatogory}
          setSelectedCategory={setSelectedCategory}
        />
        <p className="text-[#fff] mt-2">Copyright 2022 JSM Media</p>
      </div>

      <div className="text-3xl h-[90vh] md:w-4/5 flex flex-col mb-2 overflow-auto p-5 font-bold ">
        <div className="flex">
          {selectedCatogory}
          <p className="  text-[#f31503] ml-2"> videos</p>
        </div>
        {loading ? <div>Loading...</div> : <Videos videos={data} />}
        {error && <div className="text-red-500 ">{error.message}</div>}
      </div>
    </section>
  );
}

export default Feed;
