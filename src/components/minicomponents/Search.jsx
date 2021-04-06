import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Search () {
const [name, setName] = useState("");


const history = useHistory();

const searchByName = (event) => {
    event.preventDefault();
    history.push(`/Item/${name}`);
    
};


return (
    <section className="search">
        <div className="background-image">      
        <div className="intro-text">
        <h1>
        Track your <br />
        package
        </h1>
        <p>
        Experience the best service ever! <br />
        <br/>
        Enter your name to track your package details
        </p>
    </div>

        <div className="forms">
        <form type="submit">
        <label>Enter Name:</label>
        <input type="text"
            placeholder="Jhon Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}/>

        <button
            className="search-button"
            type="submit"
            onClick={(event) => searchByName(event)}>
                Track
            
        </button>
        </form>
        </div>
        </div>
        </section>
);
};
    
export default Search;