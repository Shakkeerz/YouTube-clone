import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feed, VideoDetails, ChannelDetails, SearchFeed, Navbar } from "./components";

// import fetchData from './utilty/FetchFromApi'
function App() {
  // useEffect(()=>{
  //   fetchData()
  // },[])
  return (
    <BrowserRouter>
      <div className="bg-[#000]">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
