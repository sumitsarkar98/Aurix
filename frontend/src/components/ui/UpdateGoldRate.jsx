import { useState } from "react";

const UpdateGoldRate = () => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    purity: "22K",
    pricePerGram: "",
    currency: "INR",
    effectiveDate: today,
    source: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      // Example:
      // await axios.post("/api/v1/gold-price", formData, {
      //   withCredentials: true,
      // });

      alert("Gold rate updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update gold rate.");
    }
  };

  return (
    <div id="update-gold-rate" className="card shadow-sm p-4">
      <div className="accordion accordion-flush" id="goldRateAccordion">
        <div className="accordion-item border-0">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed px-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#goldRateForm"
              aria-expanded="false"
              aria-controls="goldRateForm"
            >
              <h4 className="mb-0 fw-semibold">Update Gold Rate</h4>
            </button>
          </h2>

          <div
            id="goldRateForm"
            className="accordion-collapse collapse"
            data-bs-parent="#goldRateAccordion"
          >
            <div className="accordion-body px-0 pt-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Purity */}
                  <div className="col-md-6">
                    <label className="form-label">Purity</label>
                    <select
                      className="form-select"
                      name="purity"
                      value={formData.purity}
                      onChange={handleChange}
                    >
                      <option value="24K">24K</option>
                      <option value="22K">22K</option>
                      <option value="18K">18K</option>
                    </select>
                  </div>

                  {/* Price */}
                  <div className="col-md-6">
                    <label className="form-label">Price Per Gram</label>
                    <input
                      type="number"
                      className="form-control"
                      name="pricePerGram"
                      value={formData.pricePerGram}
                      onChange={handleChange}
                      placeholder="Enter today's price"
                      required
                    />
                  </div>

                  {/* Currency */}
                  <div className="col-md-6">
                    <label className="form-label">Currency</label>
                    <input
                      type="text"
                      className="form-control"
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Effective Date */}
                  <div className="col-md-6">
                    <label className="form-label">Effective Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="effectiveDate"
                      value={formData.effectiveDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Source */}
                  <div className="col-12">
                    <label className="form-label">Source</label>
                    <input
                      type="text"
                      className="form-control"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      placeholder="e.g. IBJA"
                    />
                  </div>

                  {/* Submit */}
                  <div className="col-12 text-end">
                    <button id="update-rate-btn" type="submit" className="btn btn-warning px-4">
                      Update Gold Rate
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateGoldRate;
