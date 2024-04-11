import React from 'react'
import { useState } from 'react';

function Search() {
    const [ListOfRestraurant, setListOfRestraurant] = useState([]);
    const [searchText, setSearchText] = useState("");
  return (
    <div>
          <div className=" mt-10">
              <input
                  type="text"
                  className="  border border-black"
                  value={searchText}
                  onChange={(e) => {
                      setSearchText(e.target.value);
                  }}
              />
              <button
                  className="search-btn px-4 py-2  bg-green-200 m-4 rounded-lg mt-11"
                  onClick={() => {
                      const filteredRestraurants = ListOfRestraurant.filter((res) => {
                          return res.info.name
                              .toLowerCase()
                              .includes(searchText.toLowerCase());
                          // console.log(res)
                      });
                      setListOfRestraurant(filteredRestraurants);
                      // console.log(filteredRestraurants)
                  }}
              >
                  Search
              </button>
          </div>
    </div>
  )
}

export default Search
