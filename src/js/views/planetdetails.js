import React from "react";
import { useLocation } from "react-router-dom";

const PlanetDetails = (props) => {
    let { state } = useLocation();
    const { image, name, orbitalPeriod, rotationalPeriod, climate, diameter, description } = state;

    return (
        <>
            <div className="container" style={{ maxWidth: "80%", margin: "20px auto", color: "#fff", backgroundColor: "#1c1c1c", borderRadius: "15px", padding: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <img src={image} style={{ height: '400px', width: '600px', objectFit: 'contain', borderRadius: "10px", border: "2px solid #007bff" }} />
                    <div className="text-center d-flex flex-column justify-content-start">
                        <h1 style={{ fontFamily: "'Star Jedi', sans-serif", color: "#007bff" }}>{name}</h1>
                        <p style={{ fontStyle: "italic", textAlign: "justify" }}>{description}</p>
                    </div>
                </div>
                <hr className="text-primary" />
                <div className="container text-primary d-flex justify-content-around flex-wrap">
                    {[{ label: "Orbital Period", value: orbitalPeriod }, { label: "Rotational Period", value: rotationalPeriod }, { label: "Climate", value: climate }, { label: "Diameter", value: diameter }].map((item, index) => (
                        <div key={index} className="text-center m-2 p-2" style={{ backgroundColor: "#282828", borderRadius: "8px", width: "150px" }}>
                            <h6 style={{ fontSize: "1rem", color: "#007bff" }}>{item.label}</h6>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PlanetDetails;