import React from "react";
// import img1 from "../../src../assets/banknotes.svg";
import img1 from "../../src/assets/banknotes.svg";
import img2 from "../../src/assets/circle-stack.svg";
import img3 from "../../src/assets/arrows-right-left.svg";
import hero from "../../src/assets/bg.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";  // Importing useNavigate from react-router

const HomePage = () => {
  // HANDLE LOGIN - REDIRECT TO LOGIN PAGE
  const navigate = useNavigate();
    const HandleLogin = () => { 
      navigate("/login");
    }

  // HANDLE LOGIN - REDIRECT TO SIGNUP PAGE 
    const HandleSignup = () => {   
      navigate("/signup");
    }

  return (
    <div
      className=" bg-[#0a0a0a]
    home 
    grid lg:grid-cols-2 grid-cols-1 items-center
    lg:px-[6em] md:px-[3em] px-[1em]
    "
    >
      <div className="cont-1   
      my-[1rem] lg:my-[5rem] w-full lg:w-[90%]">
        <h1 className="text-[3.6rem] font-sans mt-5">Trade with Confidence</h1>
        <p className="pr-[2rem]  w-full  lg:w-[80%] text-muted-foreground text-[.93rem]">
          Experience next-generation trading with our advanced platform. Access
          global markets, real-time data, and professional tools designed for
          both beginners and experts.
        </p>

        <div className="bx-cont my-[2rem]
         flex  md:flex-row lg:flex-row justify-between 
         md:w-[80%] sm:w-[100%]">
          <div className="bx1 flex items-center">
            <div>
              <img src={img1} alt="" />
            </div>
            <p className="ml-3 text-[.75rem]">Regulated & Secure</p>
          </div>
          {/*  */}
          <div className="bx-cont">
            <div className="bx1 flex items-center">
              <div>
                <img src={img2} alt="" />
              </div>
              <p className="ml-3 text-[.75rem]">Real-Time Date</p>
            </div>
          </div>
          {/*  */}
          <div className="bx-cont">
            <div className="bx1 flex items-center">
              <div>
                <img src={img3} alt="" />
              </div>
              <p className="ml-3 text-[.75rem]">24/7 Support</p>
            </div>
          </div>
        </div>

        {/*  */}

        {/* LOGIN -  GET STARTED  */}
        <div className="my-2 flex">
          <Button
          onClick={HandleSignup}
          // onclick={HandleLogin}
            className="
          border border-[#3d3d3dc]
          p-[1.5em] 
          text-[.8rem] font-[550]
          bg-white
          text-black
          hover:bg-black
          hover:text-white
          hover:border-[#3d3d3d]
          transition duration-300 ease-in-out"
          >
            Start Trading
          </Button>

          <Button
          onClick={HandleLogin}
            className="mx-4 
          border border-[#3d3d3d]
          p-[1.5em] 
          text-[.8rem] font-[550]
          hover:bg-black
          hover:border-[#3d3d3d]
          transition duration-300 ease-in-out"
          >
            Login to Account
          </Button>
        </div>

        {/* DETAILS  */}
        <div className="detail-sec 
        bg-fuchsia-0 my-[3rem] 
        bg-red-0
        border-t border-t-[#3d3d3d]
        pt-5
        lg:w-[80%] sm:w-[100%]">
          <div className="detail-cont flex justify-between text-start">
            <div>
              <h1 className="text-[2rem] font-[700]">$2.5B+</h1>
              <p className="text-[.8rem] text-slate-300">Daily Volume</p>
            </div>
            {/*  */}
            <div>
              <h1 className="text-[2rem] font-[700]">150k+</h1>
              <p className="text-[.8rem] text-slate-300">Active Traders</p>
            </div>
            {/*  */}
            <div>
              <h1 className="text-[2rem] font-[700]">99%</h1>
              <p className="text-[.8rem] text-slate-300">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="cont-2 lg:p-3">
        <img src={hero} className="rounded-xl " alt="" />
      </div>
    </div>
  );
};

export default HomePage;
