import { Link } from "react-router-dom";

export default function InsightCard({ insight }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
      <h3>{insight.title}</h3>
      <p>{insight.summary}</p>
      <p><strong>Impact:</strong> {insight.impact}</p>
      <Link to={`/insights/${insight._id}`}>View Details</Link>
    </div>
  );
}
