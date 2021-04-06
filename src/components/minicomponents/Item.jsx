import React from "react";

function Item ({parcel_id, status, sender, location_name, eta }) {


  //use RegEx to format the eta fetched from API
/*const formatETA = (eta) => {
    const regex = new RegExp(/\d{4}-\d{2}-\d{2}/g);
    const date = eta.match(regex);
    return date;
};*/


return (
    <article className="info">
      
    
    <table>
                    <tbody>
                        <tr>
                            <td>{parcel_id}</td>
                            <td>{location_name}</td>
                            <td>{sender}</td>
                            <td>{status}</td>
                            <td>{eta}</td>
                        </tr>
                    </tbody>
                </table>
    </article>
);
};

export default Item;