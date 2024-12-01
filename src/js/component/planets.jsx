import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = (props) => {
    const { actions } = useContext(Context);
    const planetInfo = {
        name: props.name,
        type: "planet-",
        orbitalPeriod: props.orbit,
        rotationalPeriod: props.rotation,
        climate: props.climate,
        diameter: props.diameter,
        terrain: props.terrain,
        image: props.image,
        description: props.description,
        population: props.population,
    };

    return (
        <div 
            className="card planet-card m-2 shadow-sm"
            style={{
                maxWidth: "100%",
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >
            <img 
                src={props.image} 
                className="card-img-top" 
                alt="Planet" 
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
                    {planetInfo.name}
                </h5>
                <p className="card-text mb-1">
                    <strong>Climate:</strong> {planetInfo.climate}
                </p>
                <p className="card-text mb-1">
                    <strong>Population:</strong> {planetInfo.population}
                </p>
                <p className="card-text mb-1">
                    <strong>Orbital Period:</strong> {planetInfo.orbitalPeriod}
                </p>
                <p className="card-text">
                    <strong>Terrain:</strong> {planetInfo.terrain}
                </p>
                <div className="d-flex justify-content-around">
                    <Link to={"/planet-details/" + props.id} state={planetInfo} ><button className="btn btn-primary">Learn more!</button></Link>
                    <button type="button" className="btn btn-outline-warning" onClick={()=>{actions.addFavorites(planetInfo)}}><i className="fa-regular fa-heart"></i></button>

                </div>
            </div>
        </div>
    );
};

export default Planets;