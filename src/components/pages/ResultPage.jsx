import React from "react";
import Item from "../minicomponents/Item";


const ResultsPage = ({  parameter, information }) => {
  //If it is a number, we want to find the package with this unique id
    const filteredItems = information.filter((item) => {
    //return parseInt(parcel.parcel_id) === parseInt(parameter);
    return (item.user_name)===(parameter)});
    console.log(filteredItems)
   

if (filteredItems[0] === undefined){ 
return (
    <div className="results-page">
        <p className="no-results">
        Your search has not given any results. <br />
        Please check that the id you entered is correct and try again
        </p>
        </div>
    );}else

        return(
            <div className="results-page">
                <table>
                    <thead>
                        <tr>
                            <th>Parcel_ID</th>
                            <th>Location Name</th>
                            <th>Sender</th>
                            <th>Status</th>
                            <th>ETA</th>
                        </tr>
                    </thead>
                </table> 
                {information.map ((item) => (<Item key={item.id} parcel_id={item.parcel_id} 
                location_name={item.location_name} status={item.status} sender={item.sender} eta={item.eta}/>))
    }
        </div>
        );
}
        

export default ResultsPage;