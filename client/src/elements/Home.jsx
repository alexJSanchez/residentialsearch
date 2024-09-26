import React, { useState } from "react";
import residential from "../residentials"; // Assuming this is your data

const Home = () => {
    const [search, setSearch] = useState(''); 
    const [searchResult, setSearchResult] = useState([]); // Initialize as an empty array

    // Search function
    function searchByAddress(query) {
        const lowerCaseQuery = query.toLowerCase();
        
        // Use a Set to store unique addresses
        const uniqueProperties = new Set();
        
        // Filter and add to the Set to ensure uniqueness
        return residential.filter(property => {
            const lowerCaseAddress = property.Address.toLowerCase();
            
            // Only add to the result if it's not already in the Set
            if (lowerCaseAddress.includes(lowerCaseQuery) && !uniqueProperties.has(lowerCaseAddress)) {
                uniqueProperties.add(lowerCaseAddress); // Add to Set
                return true; // Include in filtered result
            }
            
            return false; // Exclude if it's a duplicate
        });
    }

    function HandleSubmit(e){
        e.preventDefault();
        const searchQuery = e.target.searchName.value;
        const result = searchByAddress(searchQuery);
        setSearchResult(result); // Set searchResult with the result of the search
    }
    console.log(searchResult)
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
            <div className="search-results">
                
                {searchResult.length > 0 ? (    
                    searchResult.map((item, index) => (
                        <div key={index}><h4>{item.Super}</h4><h3>{item.Address}</h3><h5>{item.Super_Cell}</h5></div>// Ensure each item has a unique key
                        
                    ))
                ) : (
                    <p>No results found.</p> // Display message if no results are found
                )}
            </div>
        </div>
    );
}

export default Home;
