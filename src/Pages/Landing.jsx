import React from "react";
import lan from "../assent/illustration-intro.png";
import bac from "../assent/bg-curvy-desktop.svg";

const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px] relative z-20">
          <div className="w-[750px] max-w-full">
            <img src={lan} alt="landing-img" className="w-full h-fit " />
          </div>
          <div className="text-center my-[30px] ">
            <h1 className="text-white text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="text-white font-normal text-md px-[15px] md:w-[600px] md:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
              nulla impedit commodi.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] element-center mx-auto text-white font-medium cursor-pointer"
          >
            {" "}
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[150px]">
        <img src={bac} alt="" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Landing;
