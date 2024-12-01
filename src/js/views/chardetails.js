import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useLocation } from "react-router-dom";

const CharDetails = (props) => {
    const { store, actions } = useContext(Context);
    let { state } = useLocation();
    const { image, name, birthYear, gender, hair, skin, eyes, height, description } = state;

    return (
        <>
            <div className="container" style={{ maxWidth: "80%", margin: "20px auto", color: "#fff", backgroundColor: "#222", borderRadius: "15px", padding: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <img src={image} style={{ height: '400px', width: '600px', objectFit: 'contain', borderRadius: "10px", border: "2px solid #ffd700" }} />
                    <div className="text-center d-flex flex-column justify-content-start">
                        <h1 style={{ fontFamily: "'Star Jedi', sans-serif", color: "#ffd700" }}>{name}</h1>
                        <p style={{ fontStyle: "italic", textAlign: "justify" }}>{description}</p>
                    </div>
                </div>
                <hr className="text-warning" />
                <div className="container text-warning d-flex justify-content-around flex-wrap">
                    {[{ label: "Name", value: name }, { label: "Birth Year", value: birthYear }, { label: "Gender", value: gender }, { label: "Height", value: height }, { label: "Skin Color", value: skin }, { label: "Eye Color", value: eyes }, { label: "Hair Color", value: hair }].map((item, index) => (
                        <div key={index} className="text-center m-2 p-2" style={{ backgroundColor: "#333", borderRadius: "8px", width: "150px" }}>
                            <h6 style={{ fontSize: "1rem", color: "#ffd700" }}>{item.label}</h6>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CharDetails;