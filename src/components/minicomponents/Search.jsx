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
    <div className="intro-text">
        <h1>
        Track your <br />
        package
        </h1>
        <p>
        Are you expecting a delivery? Cool! <br />
        Fill in your package ID below
        </p>
    </div>

      {/* The part with forms will look different depending on screen size */}

        <div className="forms">
        <form type="submit">
        <label>Name:</label>
        <input
            placeholder="John Doe"
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
        </section>
);
};
    

export default Search;