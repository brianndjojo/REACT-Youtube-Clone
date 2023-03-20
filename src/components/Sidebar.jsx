import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


/* What is Map used for in JS/JSX?
    Map is a collection of key/value pairs that can use any type of data as a key or value and 
    remember the order of its entries. It is used to iterate over all the elements in an array, which results in a new array.
*/

 // Flag to determine whether a category is clicked..
 // Since First category is New.. it is initialized with string, 'New'..

 /*const selectedCategory = 'New';*/

 // UseState Props from Feed.jsx is imported here as arguments for Sidebar..
const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack 
        direction="column" 
       
        sx={{
            // overflowY shows what elements can be seen if the content overflows a block-level element's top and bottom edges..
            overflowY: "auto",
            height: { sx: 'auto', md: '95%'},
            // flex direction is a CSS property that specifies the direction of the flexbile items..
            // In PC, the sidebar appears as a Column, but within mobile devices it will appear as a row..
            flexDirection: {md: 'column'},
        }}
    >
        {/* Categories list for feed page... All Icons and Names imported from utils folder.. */}
        {/* Map each category from the categories list.. with each iteration show the following HTML elements.. */}
        {/* The Key Prop is used by REACT to understand the component-to-DOM Element Relation.. Keys should eitehr be Unique or Static.*/}
        
        {categories.map( (category) => (

            // Onclick function below calls setSelectedCategory when a category is clicked..
            // This basically allows the Category Title and contents within feed to change...
            <button 
                className="category-btn"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    
                    // conditional JSX background statement... checks if category name is equal to selected category
                    // if it fits the conditional statement then change the background color.. indicated by &&, and checking conditional indiciated by ===
                    background: category.name === selectedCategory && '#FC1503',
                    color: 'white'
                }}

                //whenver we're mapping something in react, we have to give each property a key..
                // Below is relatively dangerous since there is no filter to determine whether Key is unique...
                // However, since this is Static Array it shouldn't encounter any problems..
                key = {category.name} 
            >   
                {/* Iterate over each category from the mapping and output the following data.. */}
                
                {/* conditional expression shown below.. checks if category name is same as selected category.. 
                    If so, then white, if not then red... ? is an if statement and : represents else..
                */}                
                <span style={{
                    color: category.name === selectedCategory ? 'white' : 'red',
                    marginRight: '15px'
                }}>
                    {category.icon} 
                </span>
                
                <span style={{
                    opacity: category.name === selectedCategory ? '1' : '0.8'
                }}>
                    {category.name}
                </span>
            
            </button>
        ))}
    </Stack>
)

export default Sidebar