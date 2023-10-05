import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const SearchFeedback = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  return (
    <div className="w-3/4 mr-4">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400 ml-3"
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
          placeholder="Search feedback..."
          type="text"
          value={inputValue} // Bind the input value to the state variable
          onChange={handleInputChange} // Attach the onChange event handler
        />
      </div>
    </div>
  );
};

export default SearchFeedback;
