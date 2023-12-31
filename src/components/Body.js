import React from 'react';
import Typewriter from './Typewriter';
import BlogSignup from "./BlogSignup";

const Body = () => {
  return (
    <div className={"h-screen bg-dark-navy-blue "}>
      <div className="h-full grid gap-x-10">
        <div className="h-full flex flex-col items-center justify-center md:text-7xl text-3xl">
          <div className={"font-['JetBrainsMonoBold'] text-gray-400"}>
            Who I am:
          </div>
          <Typewriter/>
          <BlogSignup/>
        </div>
      </div>
    </div>
  );
};

export default Body;
