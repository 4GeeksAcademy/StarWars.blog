import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Vehicles = (props) => {
    const { actions } = useContext(Context);
    const vehicleInfo = {
        name: props.name,
        type: "vehicle-",
        costInCredits: props.cost,
        model: props.model,
        passengers: props.passengers,
        shipLength: props.totalLength,
        capacity: props.cargoCapacity,
        image: props.image,
        description: props.description,
        crew: props.crew,
    };

    return (
        <div 
            className="card vehicle-card m-2 shadow-sm"
            style={{
                maxWidth: "100%",
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >
            <img 
                src={props.image} 
                className="card-img-top" 
                alt="Vehicle" 
                style={{
                    objectFit: 'contain',
                    width: "100%",
                    height: "200px",
                }} 
            />
            <div 
                className="card-body text-center"
                style={{
                    padding: "1rem",
                }}
            >
                <h5 
                    className="card-title" 
                    style={{
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                    }}
                >
                    {vehicleInfo.name}
                </h5>
                <p className="card-text mb-1">
                    <strong>Model:</strong> {vehicleInfo.model}
                </p>
                <p className="card-text mb-1">
                    <strong>Cost:</strong> {vehicleInfo.costInCredits} credits
                </p>
                <p className="card-text mb-1">
                    <strong>Passengers:</strong> {vehicleInfo.passengers}
                </p>
                <p className="card-text mb-1">
                    <strong>Length:</strong> {vehicleInfo.shipLength} meters
                </p>
                <p className="card-text">
                    <strong>Crew:</strong> {vehicleInfo.crew}
                </p>
                <div className="d-flex justify-content-around">
                    <Link to={"/vehicle-details/" + props.id} state={vehicleInfo} ><button className="btn btn-primary">Learn more!</button></Link>
                    <button type="button" className="btn btn-outline-warning" onClick={()=>{actions.addFavorites(vehicleInfo)}}><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;