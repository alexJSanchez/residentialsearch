import React, { useState } from "react";
import residential from "../residentials"; // Assuming this is your data
import '../index.css'; // Import the CSS file for styles
import { images } from '../images/images'; // Import the images module

const Home = () => {
    const [search, setSearch] = useState(''); 
    const [searchResult, setSearchResult] = useState([]); // Initialize as an empty array

    // Search function for both address and name
    function searchProperties(query) {
        const lowerCaseQuery = query.toLowerCase();
        const uniqueProperties = new Set();

        const filteredResults = residential.filter(property => {
            const lowerCaseAddress = property.Address.toLowerCase();
            const lowerCaseSuper = property.Super.toLowerCase(); // Assuming 'Super' is the name field
            
            const matchesAddress = lowerCaseAddress.includes(lowerCaseQuery);
            const matchesName = lowerCaseSuper.includes(lowerCaseQuery);

            const uniqueKey = `${property.Address}-${property.Super}`;

            if ((matchesAddress || matchesName) && !uniqueProperties.has(uniqueKey)) {
                uniqueProperties.add(uniqueKey); // Add the unique key to the Set
                return true; // Include in filtered result
            }
            
            return false; // Exclude if it's a duplicate
        });

        return filteredResults; // Return the filtered results
    }

    function HandleSubmit(e) {
        e.preventDefault();
        const searchQuery = e.target.searchName.value;
        const result = searchProperties(searchQuery); // Use the updated search function
        setSearchResult(result); // Set searchResult with the result of the search
    }

    console.log(searchResult);

    return (
        <div>
            <form className="searchForm" onSubmit={HandleSubmit}>
                <label>Search</label>
                <input 
                    type="text" 
                    name="searchName" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} // Updates state for input value
                />
                <button type="submit">Submit</button>
            </form>

            {/* Display search results */}
            <div className="results-container">
                {searchResult.length > 0 ? (    
                    searchResult.map((item, index) => (
                        <div key={index} className="result-card">
                            <img src={item.image} alt={`Image of ${item.Super}`} className="result-image" />
                            <h4>{item.Super}</h4>
                            <h3>{item.Address}</h3>
                            <h5>{item.Super_Cell}</h5>
                            <h5>{item.Super_Phone}</h5>
                        </div> // Ensure each item has a unique key
                    ))
                ) : (
                    <p>No results found.</p> // Display message if no results are found
                )}
            </div>
        </div>
    );
}

export default Home;
