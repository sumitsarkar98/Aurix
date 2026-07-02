import React from "react";

const PriceCard = ({ purity, pricePerGram }) => {
  return (
    <div
      id="price-card"
      className="px-5 py-2 rounded d-flex flex-column justify-content-center align-items-center gap-1"
    >
      <h5>{purity}</h5>
      <p>₹ {pricePerGram.toFixed(2)}</p>
      <p>/gram</p>
    </div>
  );
};

export default PriceCard;
