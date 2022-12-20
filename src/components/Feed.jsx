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

  useEffect(() => {
    // fetchData(selectedCatogory)
    setLoading(true);
    fetchFromApi(`/search?part=snippet&q=${selectedCatogory}`)
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
  }, [selectedCatogory]);

  return (
    <section className="flex relative md:static">
      <div className="h-[50px] w-full absolute md:static md:w-[300px] md:h-[92vh]  border-r-2 border-opacity-50 border-[gray] md:p-5 md:overflow-y-scroll ">
        <SideBar
          selectedCatogory={selectedCatogory}
          setSelectedCategory={setSelectedCategory}
        />
        <p className="hidden md:block text-[#fff] mt-2">
          Copyright 2022 JSM Media
        </p>
      </div>

      <div className={`text-[20px] md:text-3xl h-[90vh] mt-[50px] md:mt-0 md:w-4/5 flex flex-col mb-2 overflow-auto md:p-5 font-bold `}>
        <div className="flex ">
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
