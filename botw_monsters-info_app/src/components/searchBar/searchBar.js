import React, { useState, useEffect } from "react";

// Function that display the searchBar and Track the filter
export default function SearchBar({value, onChange}) {

    // Change the value
    const handleChange = (e) => {
        onChange(e.target.value)
    }

    // Return a searchBar
    return (
        <div>
            <input value={value} onChange={handleChange}></input>
        </div>
    )
  }