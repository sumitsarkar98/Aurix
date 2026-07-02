import { useLocation, useNavigate } from "react-router-dom";

const LeadDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const lead = state?.lead;

  if (!lead) {
    return (
      <div className="container py-5 text-center">
        <h3>Lead not found</h3>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/admin")}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow rounded-4">
        <div className="card-body p-4">
          <h2 className="mb-4">{lead.customer}</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <strong>Purity</strong>
              <p>{lead.purity}</p>
            </div>

            <div className="col-md-6">
              <strong>Weight</strong>
              <p>{lead.weight} gm</p>
            </div>

            <div className="col-md-6">
              <strong>Price / Gram</strong>
              <p>₹{lead.pricePerGram.toLocaleString()}</p>
            </div>

            <div className="col-md-6">
              <strong>Estimated Amount</strong>
              <p>₹{lead.estimatedAmount.toLocaleString()}</p>
            </div>

            <div className="col-md-6">
              <strong>Status</strong>
              <p>{lead.status}</p>
            </div>

            <div className="col-md-6">
              <strong>City</strong>
              <p>{lead.city}</p>
            </div>

            <div className="col-md-6">
              <strong>Created At</strong>
              <p>{lead.createdAt}</p>
            </div>
          </div>

          <button
            className="btn btn-secondary mt-4"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
