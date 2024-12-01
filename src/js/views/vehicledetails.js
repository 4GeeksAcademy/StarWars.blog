import React from "react";
import { useLocation } from "react-router-dom";

const VehicleDetails = (props) => {
    let { state } = useLocation();
    const { name, costInCredits, model, passengers, shipLength, capacity, image, description, crew } = state;

    return (
        <>
            <div className="container" style={{ maxWidth: "80%", margin: "20px auto", color: "#fff", backgroundColor: "#101010", borderRadius: "15px", padding: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <img src={image} style={{ height: '400px', width: '600px', objectFit: 'contain', borderRadius: "10px", border: "2px solid #28a745" }} />
                    <div className="text-center d-flex flex-column justify-content-start">
                        <h1 style={{ fontFamily: "'Star Jedi', sans-serif", color: "#28a745" }}>{name}</h1>
                        <p style={{ fontStyle: "italic", textAlign: "justify" }}>{description}</p>
                    </div>
                </div>
                <hr className="text-success" />
                <div className="container text-success d-flex justify-content-around flex-wrap">
                    {[{ label: "Model", value: model }, { label: "Passengers", value: passengers }, { label: "Crew", value: crew }, { label: "Cost (Cr)", value: costInCredits }, { label: "Cargo (Cr)", value: capacity }].map((item, index) => (
                        <div key={index} className="text-center m-2 p-2" style={{ backgroundColor: "#181818", borderRadius: "8px", width: "150px" }}>
                            <h6 style={{ fontSize: "1rem", color: "#28a745" }}>{item.label}</h6>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default VehicleDetails;