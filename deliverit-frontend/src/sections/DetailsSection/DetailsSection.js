import React, { useState, useEffect } from "react";
import "./DetailsSection.css";
import Footer from "../../components/Footer/Footer";
import DetailCard from "../../components/DetailCard/DetailCard";

const DetailsSection = props => {
  const [appetizers, setAppetizers] = useState([]);
  const place = props.location.search.substring(
    8,
    props.location.search.length - 1
  );

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/items?storeId=${props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setAppetizers(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="details-section">
      <h1>{place}</h1>
      <div className="details-section--wrapper">
        <h1>ITEMS</h1>
        {appetizers.map((appetizer, idx) => (
          <DetailCard key={idx} menu={appetizer} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DetailsSection;
