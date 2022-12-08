import React, { useState } from "react";
import { categories } from "../utilty/constants";
function SideBar({ setSelectedCategory, selectedCatogory }) {
  //   const [selectedCatogory, setSelectedCategory] = useState("");
  return (
    <div className=" flex md:flex-col overflow-x-scroll ">
      {categories?.map(({ Icon, name }, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(name)}
          className="category-btn flex flex-col md:flex-row text-[14px] md:text-xl"
          style={{ background: name === selectedCatogory && "#FC1503" }}
        >
          <span
            className="hidden md:block"
            style={{
              color: name === selectedCatogory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {Icon}
          </span>
          <span style={{ opacity: name === selectedCatogory ? "1" : "0.6" }}>
            {name}
          </span>
        </button>
      ))}
    </div>
  );
}

export default SideBar;
