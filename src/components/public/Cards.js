import React from "react";
import { Card } from "./Card";

export const Cards = ({ mascotas }) => {
  const cardList = mascotas.map((m) => <Card mascota={m} key={m.id} />);
  console.log("mascotas " + JSON.stringify(mascotas));

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
