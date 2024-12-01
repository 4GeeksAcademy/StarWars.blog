import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Characters = (props) => {
    const { store, actions } = useContext(Context);
    const personInfo = {
        name: props.name,
        type: "",
        birthYear: props.birthYear,
        gender: props.gender,
        skin: props.skinColor,
        eyes: props.eyeColor,
        hair: props.hair,
        image: props.image,
        description: props.description,
        height: props.height
    };

    return (
        <div 
            className="card character-card m-2 shadow-sm"
            style={{
                maxWidth: "100%",
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >
            <img 
                src={props.image} 
                className="card-img-top" 
                alt="Character" 
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
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
                    {personInfo.name}
                </h5>
                <p className="card-text mb-1">
                    <strong>Gender:</strong> {personInfo.gender}
                </p>
                <p className="card-text mb-1">
                    <strong>Birth Year:</strong> {personInfo.birthYear}
                </p>
                <p className="card-text">
                    <strong>Description:</strong> {personInfo.description}
                </p>
                <div className="d-flex justify-content-around">
                    <Link to={"/details/" + props.id} state={personInfo} ><button className="btn btn-primary">Learn more!</button></Link>
                    <button type="button" className="btn btn-outline-warning" onClick={()=>{actions.addFavorites(personInfo)}}><i class="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Characters;