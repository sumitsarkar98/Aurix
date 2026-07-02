import React from "react";

const CalculationResult = ({ result, onSave, loading }) => {
  if (!result) {
    return (
      <div className="h-100 py-5">
        <div className="card-body bg-white h-100 d-flex flex-column justify-content-center text-center shadow-sm rounded-4 p-5">
          <h4 className="calculator-title text-center mb-4">
            Calculation Result
          </h4>

          <p className="text-muted mb-0">
            Enter the required details and click{" "}
            <strong className="fst-italic">Calculate Gold Price</strong> to view
            the estimated amount.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-100 py-5 result-body">
      <div className="card-body bg-body h-100 rounded-4 shadow-sm p-5">
        <h4 className="calculator-title text-center text-decoration-underline mb-4">
          Calculation Result
        </h4>

        <div className="d-flex justify-content-between mt-5 mb-3">
          <span>Purity</span>
          <strong>{result.purity}</strong>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <span>Weight</span>
          <strong>{result.weight} gm</strong>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <span>Price / Gram</span>
          <strong>₹{result.pricePerGram.toLocaleString()}</strong>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <span>Gold Value</span>
          <strong>₹{result.goldValue.toLocaleString()}</strong>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <span>Making Charges ({result.makingChargesPercent}%)</span>
          <strong>₹{result.makingChargesAmount.toLocaleString()}</strong>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <span>GST ({result.gstPercent}%)</span>
          <strong>₹{result.gstAmount.toLocaleString()}</strong>
        </div>

        <hr />

        <div className="d-flex justify-content-between fs-5 fw-bold">
          <span>Total Amount</span>
          <span>₹{result.totalAmount.toLocaleString()}</span>
        </div>

        <button
          className="btn calculator-btn w-100 mt-4"
          onClick={() => onSave(result)}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Purchase"}
        </button>
      </div>
    </div>
  );
};

export default CalculationResult;
