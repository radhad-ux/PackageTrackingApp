import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Search () {
const [name, setName] = useState("");

  //using history hook of react-router-dom allows to user to submit forms by pressing Enter
const history = useHistory();

const searchByName = (event) => {
    event.preventDefault();
    //prevents user from submitting an empty input
    //if (id === "") return;
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
        Enter your name to track your package
        </p>
    </div>

      {/* The part with forms will look different depending on screen size */}

        <div className="forms">
        <form type="submit">
        <label>Enter Name:</label>
        <input type="text"
            placeholder="Jhon Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
        />
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