import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { FcSms } from 'react-icons/fc';


const Login = () => {
  return (
    <div className="ml-auto mr-auto grid md:grid-cols-2 container m-2 p-2 ">
        <img className="w-96 py-auto mt-20 hidden sm:block" src="https://i.ibb.co/6RC9DBw/5464649-2853458.jpg" alt="" />
      
      <div className=" container border-l-2 border-r-2 border-[#27dec0] bg-white shadow-xl p-2 rounded-md">
        <p className="text-2xl font-bold text-center mt-10">Contact US</p>

        <form class="w-full max-w-lg ml-auto mr-auto mt-6">
          <div class="w-full ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
             <p className="flex">  <FaUserCircle className="text-xl mr-2 text-[#27dec0]"></FaUserCircle>  <span>Full Name</span> </p>
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Enter Your Full Name"
            />
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
               

                <p className="flex">  <BsFillTelephoneOutboundFill className="text-xl mr-2 text-[#27dec0]"></BsFillTelephoneOutboundFill>  <span> Contract No</span> </p>
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="Jane"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
               

                <p className="flex">  <AiTwotoneMail className="text-xl mr-2 text-[#27dec0]"></AiTwotoneMail>  <span>  Email</span> </p>
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6 -mt-4">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
               
                <p className="flex">  <FcSms className="text-xl mr-2"></FcSms>  <span>   Message</span> </p>
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="Message"
              />
            </div>
          </div>
         
          <p className="text-xl w-64 text-center items-center  bg-gradient-to-r from-[#27dec0] to-blue-500 hover:bg-blue-700 text-white font-bold py-2  
           rounded ml-auto mr-auto max-width-auto">Submit</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
