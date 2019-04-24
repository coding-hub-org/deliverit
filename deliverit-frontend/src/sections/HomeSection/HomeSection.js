import React, { useState, useEffect } from "react";

import "./HomeSection.css";
import CardPlace from "../../components/CardPlace/CardPlace";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const HomeSection = props => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/images")
      .then(response => response.json())
      .then(data => {
        setStore(data);
      });
  }, []);

  const cardPlaceList = store.map(data => {
    let placeId = data.storeName
      .toLowerCase()
      .split(" ")
      .join("-");
    return (
      <Link to={`/details/${placeId}`}>
        <CardPlace place={data} />
      </Link>
    );
  });

  return (
    <div className={"home-section"}>
      <div className={"home-section--wrapper"}>{cardPlaceList}</div>
      <Footer />
    </div>
  );
};

export default HomeSection;
