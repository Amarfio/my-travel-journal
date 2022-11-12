import React from "react";
// import tryImage from "../images/tryImage.jpg";

export default function Travel(props){
    // console.log(props);
    return(
        <div className="card mb-3" style={{ maxWidth: '540' }}>
            <div className="row g-0">
                <div className="col-md-4">
                
                <img src={props.img} className="img-fluid rounded-start" style={{ height: '100%' }} alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                <p className="card-text"><small className="text-muted">{props.location} &nbsp; <a href={props.mapLink} target={"_blank"}>View on Google Maps</a></small></p>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"><small className="text-muted"><b>{props.start_date} - {props.end_date}</b></small></p>
                    <p className="card-text">{props.description}</p>
                    
                </div>
                </div>
            </div>
        </div>
        
    )
}