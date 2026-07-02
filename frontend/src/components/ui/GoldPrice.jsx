import React from "react";
import { useState } from "react";
import PriceCard from "./PriceCard.jsx";
const goldPriceData = {
  success: true,
  message: "Gold prices fetched successfully.",
  data: {
    currency: "INR",
    unit: "gram",
    lastUpdated: "2026-07-02T09:30:00.000Z",
    prices: [
      {
        purity: "24K",
        pricePerGram: 10350,
      },
      {
        purity: "22K",
        pricePerGram: 9488,
      },
      {
        purity: "18K",
        pricePerGram: 7763,
      },
      {
        purity: "16K",
        pricePerGram: 6900,
      },
      {
        purity: "9K",
        pricePerGram: 5800,
      },
    ],
  },
};
const GoldPrice = () => {
  const { currency, unit, lastUpdated, prices } = goldPriceData.data;
  //   const [price, setPrice] = useState(prices);
  return (
    <div id="gold-price-container">
      {/* heading part */}
      <div className="px-2 mt-3 gold-price-heading d-flex justify-content-between align-items-center">
        <h4>Today's Gold Rate</h4>
        <p>
          Updated :<span className="ms-2">26 july,2023</span>
          <span className="mx-1">11.00 pm</span>
        </p>
      </div>
      {/* display data */}
      <div className="d-flex justify-content-center align-items-center gap-3 py-4">
        {prices.map((price, index) => (
          <PriceCard
            key={index}
            purity={price.purity}
            pricePerGram={price.pricePerGram}
          />
        ))}
      </div>
    </div>
  );
};

export default GoldPrice;
