import React from "react";
import { useNavigate } from "react-router-dom";
import Airbnbred from "../images/airbnbRed.png";
import HomeBg from "../images/HomeBg.jpg"
import { Globe, AlignJustify, CircleUser, IndianRupee, TicketPlus, Copyright } from "lucide-react";
import { MdOutlineStar } from "react-icons/md";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Home = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/details')
  }

  return (
    <>
      <header className="shadow-sm bg-white pb-5">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          {/* Top Navigation */}
          <div className="flex h-16 mx-20 items-center justify-between">
            {/* Left Logo Section */}
            <div className="md:flex md:items-center md:gap-12">
              <a className="block" href="#">
                <span className="sr-only">Home</span>
                <img src={Airbnbred} alt="" className="h-8" />
              </a>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-lg">
                  <li>
                    <a
                      className="text-gray-500 transition ml-50 px-3 py-2.5 hover:text-black hover:bg-gray-100 rounded-full"
                      href="#"
                    >
                      Stays
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition px-3 py-2.5 hover:text-black hover:bg-gray-100 rounded-full"
                      href="#"
                    >
                      Experiences
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <a
                className="bg-white px-3 py-2.5 text-sm font-medium text-black hover:bg-gray-100 rounded-full"
                href="#"
              >
                Airbnb your home
              </a>
              <a
                className="bg-white px-3 py-3 text-sm font-medium hover:bg-gray-100 rounded-full"
                href="#"
              >
                <Globe className="size-5" />
              </a>
              <div className="hidden sm:flex">
                <a
                  className="flex space-x-3 bg-white px-2 rounded-3xl border border-gray-300 py-2.5 hover:bg-gray-100 shadow"
                  href="#"
                >
                  <AlignJustify /> <CircleUser />
                </a>
              </div>
            </div>
          </div>

          {/* Search Bar Section */}
          <div className="flex justify-center mt-4 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-md border border-gray-300 px-4 sm:px-6 py-2 space-y-2 sm:space-y-0 sm:space-x-4 w-full max-w-screen-md">
              {/* Where */}
              <div className="flex flex-col w-full sm:flex-1">
                <span className="text-xs text-black">Where</span>
                <input
                  type="text"
                  placeholder="Search destinations"
                  className="text-sm sm:text-base text-gray-800 outline-none placeholder-gray-400 w-full"
                />
              </div>
              <div className="h-6 border-l border-gray-300 hidden sm:block"></div>

              {/* Check In */}
              <div className="flex flex-col w-full sm:flex-1">
                <span className="text-xs text-black">Check in</span>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="text-sm sm:text-base text-gray-800 outline-none placeholder-gray-400 w-full"
                />
              </div>
              <div className="h-6 border-l border-gray-300 hidden sm:block"></div>

              {/* Check Out */}
              <div className="flex flex-col w-full sm:flex-1">
                <span className="text-xs text-black">Check out</span>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="text-sm sm:text-base text-gray-800 outline-none placeholder-gray-400 w-full"
                />
              </div>
              <div className="h-6 border-l border-gray-300 hidden sm:block"></div>

              {/* Guests */}
              <div className="flex flex-col w-full sm:flex-1">
                <span className="text-xs text-black">Who</span>
                <input
                  type="text"
                  placeholder="Add guests"
                  className="text-sm sm:text-base text-gray-800 outline-none placeholder-gray-400 w-full"
                />
              </div>

              {/* Search Button */}
              <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M17.4 10.65a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="hidden sm:block ">
        <div className="flex mr-120 mx-30 border-b border-gray-200 ">
          <nav className="-mb-px flex gap-6 mt-4 overflow-hidden" aria-label="Tabs">
            <a
              href="#"
              className="shrink-0 border-b-2  px-1 pb-4 text-sm font-medium text-black hover:border-gray-300 hover:text-gray-700"
              aria-current="Popular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>



            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>

            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>

            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>

            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>

            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>


            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>


            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>

            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>

            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>
            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>

            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>
            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>

            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>

            <a
              href="#"
              className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-black"
              aria-current=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-5 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              Beachfront
            </a>
          </nav>
          
        </div>
      </div>
      
      {/* Card Section */}

      <div className="mt-8 mx-27 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        <div className="h-90 rounded-lg">
          <a href="#" className="group relative block overflow-hidden">
            <button
              className="absolute end-4 top-4 z-10 rounded-full text-gray-900 transition hover:text-gray-900/75"
            >
              <span className="sr-only ">Wishlist</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 fill-gray-500 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <img
              onClick={handleNavigate}
              src={HomeBg}
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-lg"
            />

            <div className="relative pt-2">
              <form className="mt-3 flex">
                <span
                  className=" text-lg font-medium text-gray-900 transition hover:scale-105"
                >
                  Anjar,India
                </span>

                <div className="flex ml-40 space-x-1">
                  <MdOutlineStar className="my-0.5" />
                  <span
                    type=""
                    className=" text-sm font-medium text-black transition hover:scale-105"
                  >
                    4.56
                  </span>
                </div>
              </form>
              <p className="mt-1 line line-clamp-3 text-gray-700">
                545 Kilometres away <br />
                1-6 Feb
              </p>
              <p className="text-black font-md flex items-center">
                <IndianRupee className="text-black size-4" /> 18,563 night
              </p>
            </div>
          </a>
        </div>
        <div className="h-90 rounded-lg ">
          <a href="#" className="group relative block overflow-hidden">
            <button
              className="absolute end-4 top-4 z-10 rounded-full text-gray-900 transition hover:text-gray-900/75"
            >
              <span className="sr-only ">Wishlist</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 fill-gray-500 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <img
              src={HomeBg}
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-lg"
            />

            <div className="relative pt-2">
              <form className="mt-3 flex">
                <span
                  className=" text-lg font-medium text-gray-900 transition hover:scale-105"
                >
                  Anjar,India
                </span>

                <div className="flex ml-40 space-x-1">
                  <MdOutlineStar className="my-0.5" />
                  <span
                    type=""
                    className=" text-sm font-medium text-black transition hover:scale-105"
                  >
                    4.56
                  </span>
                </div>
              </form>
              <p className="mt-1 line line-clamp-3 text-gray-700">
                545 Kilometres away <br />
                1-6 Feb
              </p>


              <p className="text-black font-md flex items-center">
                <IndianRupee className="text-black size-4" /> 18,563 night
              </p>
            </div>
          </a>
        </div>
        <div className="h-90 rounded-lg ">
          <a href="#" className="group relative block overflow-hidden">
            <button
              className="absolute end-4 top-4 z-10 rounded-full text-gray-900 transition hover:text-gray-900/75"
            >
              <span className="sr-only ">Wishlist</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 fill-gray-500 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <img
              src={HomeBg}
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-lg"
            />

            <div className="relative pt-2">
              <form className="mt-3 flex">
                <span
                  className=" text-lg font-medium text-gray-900 transition hover:scale-105"
                >
                  Anjar,India
                </span>

                <div className="flex ml-40 space-x-1">
                  <MdOutlineStar className="my-0.5" />
                  <span
                    type=""
                    className=" text-sm font-medium text-black transition hover:scale-105"
                  >
                    4.56
                  </span>
                </div>
              </form>
              <p className="mt-1 line line-clamp-3 text-gray-700">
                545 Kilometres away <br />
                1-6 Feb
              </p>
              <p className="text-black font-md flex items-center">
                <IndianRupee className="text-black size-4" /> 18,563 night
              </p>
            </div>
          </a>
        </div>
        <div className="h-90 rounded-lg ">
          <a href="#" className="group relative block overflow-hidden">
            <button
              className="absolute end-4 top-4 z-10 rounded-full text-gray-900 transition hover:text-gray-900/75"
            >
              <span className="sr-only  ">Wishlist</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 fill-gray-500 text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <img
              src={HomeBg}
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-lg"
            />

            <div className="relative pt-2">
              <form className="mt-3 flex">
                <span
                  className=" text-lg font-medium text-gray-900 transition hover:scale-105"
                >
                  Anjar,India
                </span>

                <div className="flex ml-40 space-x-1">
                  <MdOutlineStar className="my-0.5" />
                  <span
                    type=""
                    className=" text-sm font-medium text-black transition hover:scale-105"
                  >
                    4.56
                  </span>
                </div>
              </form>
              <p className="mt-1 line line-clamp-3 text-gray-700">
                545 Kilometres away <br />
                1-6 Feb
              </p>
              <p className="text-black font-md flex items-center">
                <IndianRupee className="text-black size-4" /> 18,563 night
              </p>
            </div>
          </a>
        </div>
        <div className="mt-15">
          <div className="h-90 rounded-lg ">
            <a href="#" className="group relative block overflow-hidden">
              <button
                className="absolute end-4 top-4 z-10 rounded-full text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only ">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 fill-gray-500 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src={HomeBg}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-lg"
              />

              <div className="relative pt-2">
                <form className="mt-3 flex">
                  <span
                    className=" text-lg font-medium text-gray-900 transition hover:scale-105"
                  >
                    Anjar,India
                  </span>

                  <div className="flex ml-40 space-x-1">
                    <MdOutlineStar className="my-0.5" />
                    <span
                      type=""
                      className=" text-sm font-medium text-black transition hover:scale-105"
                    >
                      4.56
                    </span>
                  </div>
                </form>
                <p className="mt-1 line line-clamp-3 text-gray-700">
                  545 Kilometres away <br />
                  1-6 Feb
                </p>
                <p className="text-black font-md flex items-center">
                  <IndianRupee className="text-black size-4" /> 18,563 night
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <span className="flex justify-center text-lg font-semibold mt-25">Continue exploring beachfront homes</span>
      <div className="flex justify-center  mt-3 ">
        <button className="bg-black flex mb-10   items-center rounded-full text-white p-3 ">
          Show more
        </button>
      </div>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-2 pb-8 pt-8  ">
          <div className="">
            <h4 className="text-3xl text-black sm:text-2xl">Inspiration for future getaways</h4>


            <div>
              <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>

                <select id="Tab" className="w-full rounded-md border-gray-200">
                  <option >Settings</option>
                  <option>Messages</option>
                  <option>Archive</option>
                  <option select >Notifications</option>
                </select>
              </div>

              <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex gap-6 mt-4" aria-label="Tabs">
                    <a
                      href="#"
                      className="shrink-0 border-b-2  px-1 pb-4 text-sm font-medium text-black hover:border-gray-300 hover:text-gray-700"
                      aria-current="Popular"
                    >
                      Popular
                    </a>

                    <a
                      href="#"
                      className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Arts & culture
                    </a>

                    <a
                      href="#"
                      className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Outdoors
                    </a>

                    <a
                      href="#"
                      className="shrink-0 border-b-2 border-transparent text-gray-500 px-1 pb-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700 "
                    >
                      Mountains
                    </a>

                    <a
                      href="#"
                      className="shrink-0 border-b-2 border-transparent text-gray-500 px-1 pb-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700 "
                    >
                      Beach
                    </a>

                    <a
                      href="#"
                      className="shrink-0 border-b-2 border-transparent text-gray-500 px-1 pb-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700 "
                    >
                      Unique stays
                    </a>

                    <a
                      href="#"
                      className="shrink-0 border-b-2 border-transparent text-gray-500 px-1 pb-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700 "
                    >
                      Categories
                    </a>

                    <a
                      href="#"
                      className="shrink-0 border-b-2 border-transparent text-gray-500 px-1 pb-4 text-sm font-medium hover:border-gray-300 hover:text-gray-700 "
                    >
                      Things to do
                    </a>
                  </nav>
                  <div className="bg-gray-100 py-8">
                    <div className="container mx-auto px-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div>
                          <h3 className="font-bold">Cammore</h3>
                          <h2>Flat rentals</h2>

                          <h3 className="font-bold mt-6">Tucson</h3>
                          <h2>Pet-friendly rentals</h2>

                          <h3 className="font-bold mt-6">Anaheim</h3>
                          <h2>Apartment rentals</h2>
                        </div>
                        <div>
                          <h3 className="font-bold ">Benalmidóena</h3>
                          <h2>Beach house rentals</h2>
                          <h3 className="font-bold mt-6">Jasper</h3>
                          <h2>Cabin rentals</h2>
                          <h3 className="font-bold mt-6">Monterey</h3>
                          <h2>Bungalow rentals</h2>
                        </div>
                        <div>
                          <h3 className="font-bold ">Benalmidóena</h3>
                          <h2>Beach house rentals</h2>
                          <h3 className="font-bold mt-6">Jasper</h3>
                          <h2>Cabin rentals</h2>
                          <h3 className="font-bold mt-6">Monterey</h3>
                          <h2>Bungalow rentals</h2>
                        </div>
                        <div>
                          <h3 className="font-bold ">Benalmidóena</h3>
                          <h2>Beach house rentals</h2>
                          <h3 className="font-bold mt-6">Jasper</h3>
                          <h2>Cabin rentals</h2>
                          <h3 className="font-bold mt-6">Monterey</h3>
                          <h2>Bungalow rentals</h2>
                        </div>
                        <div>
                          <h3 className="font-bold ">Benalmidóena</h3>
                          <h2>Beach house rentals</h2>
                          <h3 className="font-bold mt-6">Jasper</h3>
                          <h2>Cabin rentals</h2>
                          <h3 className="font-bold mt-6">Monterey</h3>
                          <h2>Bungalow rentals</h2>
                        </div>
                        <div>
                          <h3 className="font-bold ">Benalmidóena</h3>
                          <h2>Beach house rentals</h2>
                          <h3 className="font-bold mt-6">Jasper</h3>
                          <h2>Cabin rentals</h2>
                          <h3 className="font-bold mt-6">Show more</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-gray-100 border-b border-gray-200">
            <div className="max-w-6xl">
              {/* Row Layout for Sections */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Support Section */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-4">Support</h2>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-700 hover:underline">Help Centre</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">AirCover</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Anti-discrimination</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Disability support</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Cancellation options</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Report neighbourhood concern</a></li>
                  </ul>
                </div>

                {/* Hosting Section */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-4">Hosting</h2>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-700 hover:underline">Airbnb your home</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">AirCover for Hosts</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Hosting resources</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Community forum</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Hosting responsibly</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Join a free Hosting class</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Find a co-host</a></li>
                  </ul>
                </div>

                {/* Airbnb Section */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-4">Airbnb</h2>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-700 hover:underline">Newsroom</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">New features</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Careers</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Investors</a></li>
                    <li><a href="#" className="text-gray-700 hover:underline">Airbnb.org emergency stays</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-2"
          >
            <ul className="flex flex-wrap justify-center gap-4 text-sm lg:justify-end">
              <li className="flex space-x-1">
                <Copyright className="size-5 text-gray-500 transition hover:opacity-75" />
                <a href="#" className="text-gray-500 transition hover:opacity-75"> 2025 Airbnb,Inc </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy</a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Sitemap </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Company details </a>
              </li>
            </ul>

            <div className="flex flex-wrap items-center justify-center md:justify-end space-x-4 p-2 text-gray-800 dark:text-gray-200">
              {/* Language Selector */}
              <div className="flex items-center space-x-1 cursor-pointer text-gray-500 transition hover:opacity-75 hover:underline">
                <Globe size={22} className=" text-gray-500 transition hover:opacity-75" />
                <span className="text-gray-500 transition hover:opacity-75 text-sm md:text-base">English (IN)</span>
              </div>

              {/* Currency */}
              <div className="flex items-center space-x-1 cursor-pointer text-gray-500 transition hover:opacity-75 hover:underline">
                <IndianRupee size={20} />
                <span className="text-sm md:text-base">INR</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a href="#" className="hover:text-blue-600">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Home;