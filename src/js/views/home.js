import React, { useContext } from "react";
import "../../styles/home.css"; // Ensure reusable styles are updated here
import { Context } from "../store/appContext";
import Characters from "../component/characters.jsx";
import Planets from "../component/planets.jsx";
import Vehicles from "../component/vehicles.jsx";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="container mt-5">
      {/* Characters Section */}
      <section className="mb-5">
        <h2 className="text-center text-light mb-4" style={{ fontWeight: "bold" }}>
          Characters
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {store.people.map((item, index) => (
            <Characters
              key={index}
              image={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
              name={item.properties.name}
              gender={item.properties.gender}
              hair={item.properties.hair_color}
              eyeColor={item.properties.eye_color}
              id={item.uid}
              birthYear={item.properties.birth_year}
              skinColor={item.properties.skin_color}
              description={item.description}
              height={item.properties.height}
            />
          ))}
        </div>
      </section>

      {/* Planets Section */}
      <section className="mb-5">
        <h2 className="text-center text-light mb-4" style={{ fontWeight: "bold" }}>
          Planets
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {store.planets.map((item, index) => (
            <Planets
              key={index}
              image={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
              name={item.properties.name}
              orbit={item.properties.orbital_period}
              rotation={item.properties.rotation_period}
              climate={item.properties.climate}
              diameter={item.properties.diameter}
              id={item.uid}
              population={item.properties.population}
              description={item.description}
              terrain={item.properties.terrain}
            />
          ))}
        </div>
      </section>

      {/* Vehicles Section */}
      <section>
        <h2 className="text-center text-light mb-4" style={{ fontWeight: "bold" }}>
          Vehicles
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {store.vehicles.map((item, index) => (
            <Vehicles
              key={index}
              image={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
              name={item.properties.name}
              model={item.properties.model}
              crew={item.properties.crew}
              passengers={item.properties.passengers}
              cargoCapacity={item.properties.cargo_capacity}
              id={item.uid}
              totalLength={item.properties.length}
              description={item.description}
              cost={item.properties.cost_in_credits}
            />
          ))}
        </div>
      </section>
    </div>
  );
};