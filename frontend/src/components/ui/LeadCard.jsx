import React from "react";
import { useNavigate } from "react-router-dom";

const LeadCard = ({ lead }) => {
  const navigate = useNavigate();
  return (
    <div id="lead-card" className="rounded-4 shadow-sm mb-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 fw-semibold">{lead.customer}</h5>

        <span className="badge bg-light text-dark">{lead.status}</span>
      </div>

      <div className="row g-3">
        <div className="col-6">
          <small className="text-light opacity-75">Purity</small>
          <div>{lead.purity}</div>
        </div>

        <div className="col-6">
          <small className="text-light opacity-75">Weight</small>
          <div>{lead.weight} gm</div>
        </div>

        <div className="col-6">
          <small className="text-light opacity-75">Price / Gram</small>
          <div>₹{lead.pricePerGram.toLocaleString()}</div>
        </div>

        <div className="col-6">
          <small className="text-light opacity-75">Amount</small>
          <div>₹{lead.estimatedAmount.toLocaleString()}</div>
        </div>

        <div className="col-6">
          <small className="text-light opacity-75">City</small>
          <div>{lead.city}</div>
        </div>

        <div className="col-6">
          <small className="text-light opacity-75">Created</small>
          <div>{lead.createdAt}</div>
        </div>
      </div>

      <hr className="border-light opacity-25" />

      <div className="d-flex justify-content-end gap-2">
        <button
          className="btn btn-sm btn-light"
          onClick={() =>
            navigate(`/admin/leads/${lead.id}`, {
              state: { lead },
            })
          }
        >
          View
        </button>

        <button className="btn btn-sm btn-danger">Reject</button>
      </div>
    </div>
  );
};

export default LeadCard;
