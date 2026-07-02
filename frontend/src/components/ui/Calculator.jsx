import { useState } from "react";

const Calculator = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    priceSource: "market",
    purity: "22K",
    weight: "",
    pricePerGram: "",
    makingCharges: "",
    gst: 3,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    const GST_PERCENT = 3;

    let pricePerGram;
    let makingChargesPercent;

    if (formData.priceSource === "market") {
      // Later these values will come from your API
      pricePerGram = 9000;
      makingChargesPercent = 10;
    } else {
      pricePerGram = Number(formData.pricePerGram);
      makingChargesPercent = Number(formData.makingCharges);
    }

    const weight = Number(formData.weight);

    const goldValue = pricePerGram * weight;

    const makingChargesAmount = goldValue * (makingChargesPercent / 100);

    const subTotal = goldValue + makingChargesAmount;

    const gstAmount = subTotal * (GST_PERCENT / 100);

    const totalAmount = subTotal + gstAmount;

    onCalculate({
      priceSource: formData.priceSource,
      purity: formData.purity,
      weight,

      pricePerGram,
      goldValue,

      makingChargesPercent,
      makingChargesAmount,

      gstPercent: GST_PERCENT,
      gstAmount,

      totalAmount,
    });
  };

  return (
    <section id="calculator" className="container py-5">
      <div className="card calculator-card border-0 shadow-sm">
        <div className="card-body p-4 p-lg-5">
          {/* Heading */}

          <div className="text-center mb-4">
            <h3 className="calculator-title">Gold Price Calculator</h3>

            <p className="text-muted mb-0">
              Calculate the estimated value of your gold using current market
              prices or manual entry.
            </p>
          </div>

          <form onSubmit={handleCalculate}>
            <div className="row g-4">
              {/* Price Source */}

              <div className="col-12 col-md-6">
                <label className="form-label">Price Source</label>

                <select
                  className="form-select"
                  name="priceSource"
                  value={formData.priceSource}
                  onChange={handleChange}
                >
                  <option value="market">Today's Market Price</option>

                  <option value="manual">Manual Entry</option>
                </select>
              </div>

              {/* Purity */}

              <div className="col-12 col-md-6">
                <label className="form-label">Gold Purity</label>

                <select
                  className="form-select"
                  name="purity"
                  value={formData.purity}
                  onChange={handleChange}
                >
                  <option value="24K">24K</option>
                  <option value="22K">22K</option>
                  <option value="18K">18K</option>
                  <option value="16K">16K</option>
                </select>
              </div>

              {/* Show only for Manual Entry */}

              {formData.priceSource === "manual" && (
                <div className="col-12 col-md-6">
                  <label className="form-label">Gold Price / Gram (₹)</label>

                  <input
                    type="number"
                    className="form-control"
                    name="pricePerGram"
                    placeholder="Enter price per gram"
                    value={formData.pricePerGram}
                    onChange={handleChange}
                  />
                </div>
              )}

              {/* Weight */}

              <div className="col-12 col-md-6">
                <label className="form-label">Weight (grams)</label>

                <input
                  type="number"
                  className="form-control"
                  name="weight"
                  placeholder="Enter weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>

              {/* Making Charges */}

              <div className="col-12 col-md-6">
                <label className="form-label">Making Charges (%)</label>

                <input
                  type="number"
                  className="form-control"
                  name="makingCharges"
                  placeholder="Enter making charges"
                  value={
                    formData.priceSource === "market"
                      ? 10
                      : formData.makingCharges
                  }
                  onChange={handleChange}
                  readOnly={formData.priceSource === "market"}
                />
              </div>

              {/* GST */}

              <div className="col-12 col-md-6">
                <label className="form-label">GST (%)</label>

                <input
                  type="number"
                  className="form-control"
                  name="gst"
                  value={3}
                  readOnly
                />
              </div>

              {/* Button */}

              <div className="col-12">
                <button type="submit" className="btn calculator-btn w-100">
                  Calculate Gold Price
                </button>
              </div>
            </div>
          </form>

          {/* Result */}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
