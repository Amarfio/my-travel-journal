import React from "react";
import Travel from "./Travel";
import travelData from "../seperate";

export default function Content(){
    console.log(travelData);
    const travelElements = travelData.map(travels=>{
        return <Travel 
                       key={travels.id}
                    //    {...travelData}
                       img={travels.imageUrl} 
                       title={travels.title} 
                       location ={travels.location}
                       start_date={travels.start_date}
                       end_date={travels.end_date}
                       mapLink ={travels.googleMapsLink}
                       description={travels.description} 
                        />
    });

    return (
        <div className="container" style={{ marginTop: '50px'}}>
            <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {travelElements}
                    </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}