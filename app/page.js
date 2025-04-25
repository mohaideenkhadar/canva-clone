import React from 'react';

// This component represents the main Canva home page layout
const App = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4 flex flex-col">
        {/* Logo */}
        <div className="flex items-center mb-6">
          {/* Placeholder for Canva logo */}
          <svg className="w-8 h-8 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-xl font-bold text-gray-800">Abdul Demo</span>
        </div>

        {/* User Info */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            {/* Placeholder for user avatar */}
            <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold mr-2">AB</div>
            <div>
              <div className="text-sm font-semibold text-gray-700">Personal</div>
              <div className="text-xs text-gray-500">Free</div>
            </div>
          </div>
          <button className="w-full py-2 px-4 bg-yellow-400 text-gray-800 rounded-md text-sm font-semibold hover:bg-yellow-500 transition-colors">
            ✔ Try Canva Pro
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow">
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center py-2 px-3 rounded-md bg-gray-200 text-gray-800 font-semibold">
                {/* Placeholder Icon */}
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7m-2 2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
                 {/* Placeholder Icon */}
                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Projects
                 <span className="ml-auto">{'>'}</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
                 {/* Placeholder Icon */}
                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V3a2 2 0 012-2h2a2 2 0 012 2v16a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                Templates
                 <span className="ml-auto">{'>'}</span>
              </a>
            </li>
             <li className="mb-2">
              <a href="#" className="flex items-center py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
                 {/* Placeholder Icon */}
                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Brand Hub
              </a>
            </li>
             <li className="mb-2">
              <a href="#" className="flex items-center py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
                 {/* Placeholder Icon */}
                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                Apps
                 <span className="ml-auto">{'>'}</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Create a team / Trash */}
        <div>
             <a href="#" className="flex items-center py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors mb-2">
                 {/* Placeholder Icon */}
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2h5M17 20H7m6-10a6 6 0 10-12 0m6 0a6 6 0 10-12 0"></path></svg>
                Create a team
              </a>
              <a href="#" className="flex items-center py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
                 {/* Placeholder Icon */}
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                Trash
              </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow-sm p-4">
          <div className="flex items-center space-x-6">
             <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
                    Design spotlight
                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                 {/* Dropdown Placeholder */}
                 <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48 z-10">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sample 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sample 2</a>
                 </div>
             </div>
             <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
                    Business
                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                 {/* Dropdown Placeholder */}
                 <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48 z-10">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sample A</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sample B</a>
                 </div>
             </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
                    Education
                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                 {/* Dropdown Placeholder */}
                 <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-48 z-10">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sample X</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sample Y</a>
                 </div>
             </div>
             <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                ...
             </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="py-2 px-4 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition-colors">
              Create a design
            </button>
             {/* Placeholder for user icon */}
            <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">AB</div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {/* Banner Section */}
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8" style={{ backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)' }}>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <h1 className="text-3xl font-bold mb-4">Discover a magical new era</h1>
                {/* Search Bar */}
                <div className="w-full max-w-xl">
                   <div className="relative">
                      <input
                         type="text"
                         placeholder="Search your content or Canva's"
                         className="w-full py-3 px-4 pl-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                         {/* Search Icon */}
                         <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                   </div>
                </div>
             </div>
              {/* Placeholder Icons on Banner */}
             <div className="absolute top-4 right-4 flex space-x-3 text-white">
                 {/* Placeholder Icon */}
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h6a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"></path></svg>
                 {/* Placeholder Icon */}
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                 {/* Placeholder Icon */}
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1m10-4a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
             </div>
          </div>

          {/* Design Categories */}
          <div className="flex space-x-6 mb-8">
             {/* Placeholder Icons for Categories */}
             <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
                    {/* Icon Placeholder */}
                     <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16v4m-2-2h4M17 3v4m-2-2h4m2 12v4m-2-2h4M4 12H2m10 0h2m8 0h2M7 16H5m15 0h-2M6 8H4m16 0h-2M9 20H7m9 0h-2"></path></svg>
                 </div>
                 <span className="text-sm text-gray-700">For you</span>
             </div>
             <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
                    {/* Icon Placeholder */}
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                 </div>
                 <span className="text-sm text-gray-700">Docs</span>
             </div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
                    {/* Icon Placeholder */}
                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-.707l2.828 2.828a2 2 0 010 2.828l-3.465 3.465a1.004 1.004 0 01-1.395.303L9 16.146V13.5a2.5 2.5 0 012.5-2.5h2.5l-4.5-4.5z"></path></svg>
                 </div>
                 <span className="text-sm text-gray-700">Whiteboards</span>
             </div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
                    {/* Icon Placeholder */}
                     <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V3a2 2 0 012-2h2a2 2 0 012 2v16a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                 </div>
                 <span className="text-sm text-gray-700">Presentations</span>
             </div>
               <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
                    {/* Icon Placeholder */}
                     <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 2.684a3 3 0 110-2.684m0 2.684a3 3 0 100-2.684m7.316 2.684c.202.404.316.86.316 1.342s-.114.938-.316 1.342m0 0a3 3 0 100-2.684m0 2.684L19 9.342m-7.316 1.342l-6.632 3.316"></path></svg>
                 </div>
                 <span className="text-sm text-gray-700">Social media</span>
             </div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
                    {/* Icon Placeholder */}
                     <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-7 5l-4.553 2.276A1 1 0 013 15.382V8.618a1 1 0 011.447-.894L7 10m0 0l5 4m0 0l5-4m-5 4V3"></path></svg>
                 </div>
                 <span className="text-sm text-gray-700">Videos</span>
             </div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
                    {/* Icon Placeholder */}
                     <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                 </div>
                 <span className="text-sm text-gray-700">Print products</span>
             </div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-1">
                    {/* Icon Placeholder */}
                     <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0h4m-4 0v10m4-10v10"></path></svg>
                 </div>
                 <span className="text-sm text-gray-700">Websites</span>
             </div>
          </div>


          {/* "You might want to try..." Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">You might want to try...</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {/* Example Card 1 */}
              <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
                {/* Placeholder Image */}
                <div className="h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                   Placeholder Image (Doc)
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Design Visual Docs</h3>
                  <p className="text-sm text-gray-600">Design Docs</p>
                </div>
              </div>

              {/* Example Card 2 */}
               <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
                {/* Placeholder Image */}
                <div className="h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                   Placeholder Image (Whiteboard)
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Get ideas flowing</h3>
                  <p className="text-sm text-gray-600">Whiteboard</p>
                </div>
              </div>

               {/* Example Card 3 */}
               <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
                {/* Placeholder Image */}
                <div className="h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                   Placeholder Image (Instagram Post)
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">PERFECT YOUR POST</h3>
                  <p className="text-sm text-gray-600">Instagram Post (Square)</p>
                </div>
              </div>

               {/* Example Card 4 */}
               <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
                {/* Placeholder Image */}
                <div className="h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                   Placeholder Image (Presentation)
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Present with ease</h3>
                  <p className="text-sm text-gray-600">Presentation (16:9)</p>
                </div>
                 {/* Right arrow placeholder */}
                 {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                 </div> */}
              </div>
              {/* Add more cards as needed */}
            </div>
          </div>

           {/* Placeholder for the purple question mark icon */}
           {/* <div className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg cursor-pointer hover:bg-purple-700 transition-colors">
              ?
           </div> */}

        </main>
      </div>
    </div>
  );
};

export default App;

// To use this component in a Next.js application:
// 1. Make sure you have Tailwind CSS configured in your Next.js project.
// 2. Create a new file in your `pages` directory (e.g., `pages/index.js`).
// 3. Import this component and render it in your page file:
//    import App from '../components/App'; // Adjust the path as needed
//
//    export default function HomePage() {
//      return <App />;
//    }
