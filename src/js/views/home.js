import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const Home = () => {

	const { store } = useContext(Context)

	return <div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		{store.characters.map(item => <div className="card" style={{ width: "18rem" }}>
			<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
		)}

	</div>

};
