import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import RickAndMortyService from "../../services/RickAndMorty.service";

export const Cards = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    RickAndMortyService.getAllCharacters()
      .then((data) => setMascotas(data.results))
      .catch((error) => console.error(error));
  }, [mascotas]); // el useEffect escucha los cambios de mascotas

  const cardList = mascotas.map((m) => <Card mascota={m} key={m.id} />);
  // console.log("mascotas " + JSON.stringify(mascotas));

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardList}
        </div>
      </div>
    </div>
  );
};
