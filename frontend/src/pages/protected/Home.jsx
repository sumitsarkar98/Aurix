import { useState } from "react";

import GoldPrice from "../../components/ui/GoldPrice";
import Calculator from "../../components/ui/Calculator";
import CalculationResult from "../../components/ui/CalculationResult";

const Home = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = (calculatedData) => {
    setResult(calculatedData);
  };

  const handleSave = async (purchaseData) => {
    try {
      setLoading(true);

      console.log(purchaseData);

      // await axios.post("/api/purchase", purchaseData);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container min-vh-100">
      {/* Gold Price */}
      <div className="row justify-content-center mt-5">
        <div className="col-lg-10">
          <GoldPrice />
        </div>
      </div>

      {/* Calculator + Result */}
      <div className="row mt-5 g-4">
        <div className="col-12 col-lg-6">
          <Calculator onCalculate={handleCalculate} />
        </div>

        <div className="col-12 col-lg-6">
          <CalculationResult
            result={result}
            loading={loading}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
