import React from "react";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-screen pb-5 pt-3 bg-black text-white">
      <div className="flex flex-col items-center justify-center">
        <div className="w-screen px-5 lg:px-12 flex flex-col lg:grid lg:grid-cols-3 pt-4 pb-8  justify-between">
          <div>
            <h1 className="text-3xl font-semibold my-5">The wolf's agency</h1>
            <p className="text-gray-600 max-w-sm">
              Do you have a question or project you want to start? Its our
              pleasure to save you, kindly contact us now and get your free
              proposal.
            </p>
            <span>
              <h1 className="flex items-center gap-x-2 my-2">
                <IoCallSharp color="dodgerblue" /> +255682804005
              </h1>
              <h1 className="flex items-center gap-x-2 my-2">
                <MdEmail color="dodgerblue" /> help@thewolfsagency.com
              </h1>
              <h1 className="flex items-center gap-x-2 my-2">
                <IoLocationSharp color="dodgerblue" />
                Kigamboni, Dar Es Salaam,Tanzania
              </h1>
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-semibold my-5">Our Links</h1>
            <span>
              <ul>
                <li className="hover:text-orange-400 duration-200 cursor-pointer">
                  Home
                </li>
                <li className="hover:text-orange-400 duration-200 cursor-pointer">
                  Portifolio
                </li>
                <li className="hover:text-orange-400 duration-200 cursor-pointer">
                  About
                </li>
                <li className="hover:text-orange-400 duration-200 cursor-pointer">
                  Services
                </li>
                <li className="hover:text-orange-400 duration-200 cursor-pointer">
                  Clients
                </li>
              </ul>
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-semibold my-5">Subscribe</h1>
            <span className="flex flex-col">
              <input
                className="p-2 w-80 outline-none bg-gray-900 rounded-full flex  items-center"
                placeholder="Enter email"
              />
              <button className="rounded-full my-3 h-10 w-36 flex items-center justify-center bg-orange-400 text-white">
                Subscribe
              </button>
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-xs italic flex items-center justify-center gap-x-2">
            <AiOutlineCopyrightCircle />
            The wolf's agency 2022
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
