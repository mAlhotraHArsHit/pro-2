import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center bg-[#e3edf7] py-16">
      {/* Set background color here */}
      <div className="max-w-4xl mx-auto">
        {/* Top Tagline */}
        <span className="mx-auto px-6 py-2 rounded-full bg-[#e0ebff] text-[#30538a] font-semibold text-sm tracking-wider shadow-md">
          No. 1 Job Hunt Website
        </span>

        {/* Hero Text */}
        <h1 className="text-5xl font-extrabold mt-8 mb-6 leading-tight text-[#1f2937]">
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>

        <p className="text-lg text-gray-500 mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur temporibus nihil tempora dolor!
        </p>

        {/* Search Bar */}
        <div className="flex w-full sm:w-[70%] lg:w-[60%] mx-auto shadow-xl border border-gray-200 pl-4 pr-2 py-2 rounded-full items-center gap-4 bg-white transition-all duration-300 hover:shadow-2xl">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full py-3 px-4 text-gray-700 rounded-full focus:ring-2 focus:ring-[#6C63FF] transition duration-200"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-full bg-[#6A38C2] hover:bg-[#5A52F5] text-white py-3 px-6 transition-transform transform hover:scale-105 shadow-lg"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
