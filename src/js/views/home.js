import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const Home = () => {

	const {store} = useContext(Context)

	return <div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		{store.characters.map(item => <h1>{item.name}</h1>)}

	</div>

};
