import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {

    // useState for Search Terms withint he Searchbar..
    const [searchTerm, setSearchTerm] = useState();

    // useNavigate() is used to check whether a specific route exists.. from react-router-dom
    const navigate = useNavigate(); 

    // handler function when a search is submitted..
    // When a form is submitted, the page gets reloaded.. so the below
    // code prevents the page from being refreshed.
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from being refreshed..
        
        // checks if the search term exists..
        if(searchTerm){

            // if search term exists then navigate to that specifc url..
            navigate(`/search/${searchTerm}`);
            // then reset the searchTerm..
            setSearchTerm(``)
        }
    }

    return (

    // Paper is a MUI element. Basically think of it as a DIV with a white background..
    // Paper allows ease of modifications uch as resizing, shuffling, bounding, etc..
    // Below functionality to the paper can be added through 'component' in the tag..
    // onSubmit Event Listener can also be added..
    // sx below is used to adjust the CSS of the MUI Element..
    <Paper 
        component="form" 
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: {sm:5}
        }}
    >
        {/* Input Tag to allow user to write input within the searchbar.. */}
        <input
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/*IconButton is essentially a Button imported from MUI..*/}
        <IconButton type="submit" sx={{ p:'10px', color:'red'}}>
            {/*Search Logo from MUI icons..*/}
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar