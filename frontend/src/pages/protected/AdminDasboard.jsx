import React from "react";
import GoldPrice from "../../components/ui/GoldPrice.jsx";
import LeadCard from "../../components/ui/LeadCard.jsx";
import UpdateGoldRate from "../../components/ui/UpdateGoldRate.jsx";

const AdminDasboard = () => {
  const leads = [
    {
      id: 1,
      customer: "Sumit Sarkar",
      purity: "22K",
      weight: 18.5,
      pricePerGram: 9000,
      estimatedAmount: 171535,
      status: "Pending",
      city: "Kolkata",
      createdAt: "01 Jul 2026",
    },
    {
      id: 2,
      customer: "Rahul Das",
      purity: "24K",
      weight: 12.2,
      pricePerGram: 9800,
      estimatedAmount: 123558,
      status: "Contacted",
      city: "Howrah",
      createdAt: "30 Jun 2026",
    },
    {
      id: 3,
      customer: "Priya Sen",
      purity: "18K",
      weight: 8.4,
      pricePerGram: 7300,
      estimatedAmount: 64219,
      status: "Follow-up",
      city: "Barasat",
      createdAt: "29 Jun 2026",
    },
    {
      id: 4,
      customer: "Amit Roy",
      purity: "22K",
      weight: 25,
      pricePerGram: 9000,
      estimatedAmount: 231750,
      status: "Completed",
      city: "Salt Lake",
      createdAt: "28 Jun 2026",
    },
  ];
  return (
    <div id="admin-dashboard" className="container py-5">
      {/* GOLD PRICE */}
      <section className="row justify-content-center">
        <div className="col-10">
          <GoldPrice />
          <UpdateGoldRate />
        </div>
      </section>

      {/* Lead Management */}
      <section
        id="lead-management"
        className="row justify-content-center rounded-4 mt-5 py-5"
      >
        <div className="col-lg-12 mx-auto mb-3 lead-header">
          <h2 className="fw-semibold">Customer Leads</h2>
          <p className="text-muted mb-0 lead-body">
            Review and manage customer purchase requests.
          </p>
        </div>
        <div className="col-12">
          <div className="lead-grid">
            {leads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDasboard;
