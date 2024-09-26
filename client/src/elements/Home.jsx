import React, { useState } from "react";
import residential from "../residentials"; // Assuming this is your data
import '../index.css'; // Import the CSS file for styles

const Home = () => {
    const [search, setSearch] = useState(''); 
    const [searchResult, setSearchResult] = useState([]); // Initialize as an empty array

    // Search function for both address and name
    function searchProperties(query) {
        const lowerCaseQuery = query.toLowerCase();
        
        // Use a Set to store unique properties based on a combination of address and name
        const uniqueProperties = new Set();
        
        // Filter the residential data
        const filteredResults = residential.filter(property => {
            const lowerCaseAddress = property.Address.toLowerCase();
            const lowerCaseSuper = property.Super.toLowerCase(); // Assuming 'Super' is the name field
            
            // Check if the address or name matches the query
            const matchesAddress = lowerCaseAddress.includes(lowerCaseQuery);
            const matchesName = lowerCaseSuper.includes(lowerCaseQuery);

            // Construct a unique key based on address and name for uniqueness
            const uniqueKey = `${property.Address}-${property.Super}`;

            // Only add to the result if it matches and is not already in the Set
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
                            <h4>{item.Super}</h4>
                            <h3>{item.Address}</h3>
                            <h5>{item.Super_Cell}</h5>
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
