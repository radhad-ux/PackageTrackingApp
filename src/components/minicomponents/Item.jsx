import React from "react";

function Item ({parcel_id, status, sender, location_name, eta }) {
  //Destructuring to use properties of the item
// const { parcel_id, status, sender, location_name, eta } = data;

  //use RegEx to format the eta fetched from API
/*const formatETA = (eta) => {
    const regex = new RegExp(/\d{4}-\d{2}-\d{2}/g);
    const date = eta.match(regex);
    return date;
};*/


return (
    <article className="info">
      
    {/* <div className="left">
        <span className="signature">
        
        <strong>ID: </strong>
        {parcel_id}
        </span>
        <span className="signature"></span>
        <span>
        <strong>Status:</strong>
        {status}
        </span>
    </div>
      
    <div className="right">
        <span className="signature"></span>
        <span>
        <strong>ETA:</strong>
        {eta}
        </span>
        <span className="signature"></span>
        <span>
        <strong>Sender:</strong>
         {sender}
        </span>
        <span className="signature"></span>
        <span>
        {" "}
        <strong>Location:</strong>
         {location_name}
        </span>
    </div> */}
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