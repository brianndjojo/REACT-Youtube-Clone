import { Search } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  
  // Stack (MUI) is used as a layout for the Navbar.. In this case the navbar will be a Row..
  // Other properties of the nanvbar are also listed within the Stack Tag..
  <Stack direction="row" alignItems="center" p={2} sx={{ position:'sticky', background:'#000', top:0, justifyContent: 'space-between' }}>
    
    {/* Link Tag is from React Router DOM.. Basically adds a route to a specific page when the logo is clicked.. */}
    <Link to="/" style={{ display:'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45}/>
    </Link>

    {/* Right Side of Navbar should be the Search Bar... Search Bar has its own component.. */}
    <SearchBar/>
    
  </Stack>
)

export default Navbar