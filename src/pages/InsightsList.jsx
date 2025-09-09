import { useEffect, useState } from "react";
import { getInsights } from "../api/insights";
import InsightCard from "../components/InsightCard";

export default function InsightsList() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    getInsights().then((res) => setInsights(res.data.data));
  }, []);

  return (
    <div>
      <h2>Market Insights</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {insights.map((insight) => (
          <InsightCard key={insight._id} insight={insight} />
        ))}
      </div>
    </div>
  );
}
