import React from 'react';
import Airbnbred from "../images/airbnbRed.png";
import { Globe, AlignJustify, CircleUser, Share,IndianRupee, Heart, Copyright  } from "lucide-react";
import OutViews from "../images/OutViews.png";
import Livingroom from "../images/Livingroom.png";
import Bedroom from "../images/Bedroom.png";
import { Facebook, Twitter, Instagram } from "lucide-react";


const Details = () => {
    const images = [
        "../images/OutViews.jpg",
        "../images/Livingroom.jpg",
        "../images/Bedroom.jpg",
        "../images/kitchen.jpg",
        "..images/bathroom.jpg",
      ];
    
    
    
  return (
    <>
    <header className="shadow-sm bg-white pb-5">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    {/* Top Navigation */}
    <div className="flex h-16 mx-45 items-center justify-between">
      {/* Left Logo Section */}
      <div className="flex items-center">
        <a className="block" href="#">
          <span className="sr-only">Home</span>
          <img src={Airbnbred} alt="Airbnb" className="h-8" />
        </a>
      </div>

      {/* Center Search Bar */}
      <div className="flex items-center justify-center mt-4 ml-10">
        <div className="flex items-center bg-white rounded-full shadow-md border border-gray-300 px-4 py-2 space-x-4 w-full max-w-screen-sm">
          <button className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded-full">
            Anywhere
          </button>
          <div className="h-6 border-l border-gray-300"></div>
          <button className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded-full">
            Any week
          </button>
          <div className="h-6 border-l border-gray-300"></div>
          <button className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded-full">
            Add guests
          </button>
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

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <a
          className="bg-white px-3 py-2.5 text-sm font-medium text-black hover:bg-gray-100 rounded-full"
          href="#"
        >
          Airbnb your home
        </a>
        {/* Globe Icon */}
        <a
          className="bg-white px-3 py-2.5 text-sm font-medium hover:bg-gray-100 rounded-full"
          href="#"
        >
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
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </a>
        {/* User Menu */}
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
  </div>
</header>
<div className="max-w-6xl mx-auto p-4">
    <div className='flex justify-between'>
      <h2 className="text-2xl font-bold mb-4">Moinho das Feteiras | The Mill</h2>
      
          <button className="flex ml-160 items-center space-x-1 underline px-1 rounded-lg hover:bg-gray-100">
            <Share size={15}/>
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 underline px-1 rounded-lg hover:bg-gray-100">
            <Heart size={15}/>
            <span>Save</span>
          </button>
          </div>
        
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="md:col-span-2 row-span-2">
          <img
            src={OutViews}
            alt="Main Windmill"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {images.slice(1, 4).map((img, index) => (
          <img
            key={index}
            src={Livingroom}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        ))}
        <div className="relative">
          <img
            src={Bedroom}
            alt="More Images"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* <button className="absolute inset-0 bg-black bg-opacity-50 text-white font-semibold flex justify-center items-center rounded-lg">
            Show all photos
          </button> */}
        </div>
    </div>
    <div className='flex mt-5 justify-between'> 
    <div className='border-b border-gray-200 mb-65'>
<h1 className="text-2xl font-semibold">Windmill in Ponta Delgada, Portugal</h1>
<p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bathroom</p>
<span className="text-lg font-medium">⭐ 4.92</span>
<span className="text-lg ml-2  font-medium">·</span>
<a href="#" className="ml-2 underline">265 reviews</a>
</div>

<div className=''>
<a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-md object-cover"
  />


  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Price</dt>

        <dd className="text-sm text-gray-500">$240,000</dd>
      </div>

      <div>
        <dt className="sr-only">Address</dt>

        <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
      </div>
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Parking</p>

          <p className="font-medium">2 spaces</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bathroom</p>

          <p className="font-medium">2 rooms</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bedroom</p>

          <p className="font-medium">4 rooms</p>
        </div>
      </div>
    </div>
  </div>
</a>
      </div>
</div>
</div>
    <footer className="bg-gray-100">
        <div className="mx-50 px-2 pb-8 pt-8  ">
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
  )
}

export default Details